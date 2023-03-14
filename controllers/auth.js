const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const cloudinary = require("cloudinary").v2;
require("dotenv").config({ path: "../.env" });

const User = require("../models/Users");

// @method   POST
// @route   /api/v1/register
exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = await req.body;

    let user = await User.findOne({ email });
    if (user !== null) {
      const err = new Error("User already Exists");
      err.statusCode = 409;
      throw err;
    }

    const otp = await otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
    });

    const hashPassword = await bcryptjs.hash(password, 12);
    const otpExpiry = Date.now() + 60 * 60 * 1000;
    user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      otp,
      otpExpiry,
    });

    if (!user) {
      const err = new Error("Bad Request");
      err.statusCode = 400;
      throw err;
    }

    console.log(process.env.PASSWORD);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ifazul01@gmail.com",
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: "ifazul01@gmail.com",
      to: email,
      subject: "Email Confirmation",
      html: `<body><h2>OTP</h2><p>${otp}</p></body>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/confirm/:email

exports.confirmOtp = async (req, res, next) => {
  try {
    const email = req.params.email;
    const { otp } = req.body;
    let user = await User.findOne({ email });
    const id = user._id;
    if (!user) {
      const err = new Error("No user found");
      err.statusCode = 404;
      throw err;
    }

    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    if (
      otp === user.otp &&
      Date.now() < user.otpExpiry &&
      user.isEmailConfirmed === false
    ) {
      await User.findByIdAndUpdate(
        id,
        { $set: { isEmailConfirmed: true }, $unset: { otp: "" } },
        { new: true }
      );
      user.isEmailConfirmed = true;
      return res.status(200).json({
        success: true,
        message: "User confirmed",
        user,
      });
    } else if (otp === user.otp && Date.now() < user.otpExpiry) {
      await User.findByIdAndUpdate(id, { $unset: { otp: "" } }, { new: true });
      return res.status(200).json({
        success: true,
        token
      });
    } else {
      const err = new Error("Otp doesn't match");
      err.statusCode = 421;
      throw err;
    }

  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/login

exports.login = async (req, res, next) => {
  try {
    const { email, password } = await req.body;
    const user = await User.findOne({ email });

    if (!user) {
      const err = new Error("No user found");
      err.statusCode = 404;
      throw err;
    }

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      const err = new Error("Authentication failed");
      err.statusCode = 401;
      throw err;
    }

    if (!user.isEmailConfirmed) {
      const err = new Error("Please,validate your email");
      err.statusCode = 400;
      throw err;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    next(error);
  }
};

// @method   GET
// @route   /api/v1/profile
exports.profile = (req, res, next) => {
  const user = req.user;
  console.log(user);
  res.status(200).json({
    success: true,
    user,
  });
};


// @method   post
// @route   /api/v1/upload
exports.upload = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      const err = new Error("No User id found");
      err.statusCode = 404;
      throw err;
    }
    let path = await req.file;
    if (!path) {
      const err = new Error("No image provided");
      err.statusCode = 422;
      throw err;
    }

    cloudinary.config({
      cloud_name: "dymo9791t",
      api_key: "388419813741462",
      api_secret: "zEurfUl04EuKRXqOIb4qxoRcnQE",
    });

    let imageUrl = await cloudinary.uploader.upload(req.file.path);
    User.findByIdAndUpdate(id, { imageUrl }, { new: true });
    res.status(200).json({
      imageUrl,
    });
  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/updateprofile

exports.updateProfile = async (req, res, next) => {
  try {
    const { id } = await req.user;
    const body = req.body;
    const user = await User.findByIdAndUpdate(id, body, { new: true });

    if (!user) {
      const err = new Error("No user found");
      err.statusCode = 404;
      throw err;
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/resetpassword

exports.resetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      const err = new Error("No user found with this email");
      err.statusCode = 404;
      throw err;
    }

    const otp = await otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
    });

    const u = await User.findByIdAndUpdate(user._id, { $set: { otp : otp,otpExpiry: Date.now() + 60 * 60 * 1000 } }, { new: true });
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ifazul01@gmail.com",
        pass: process.env.PASSWORD,
      },
    });

    mailOptions = {
      from: "ifazul01@gmail.com",
      to: email,
      subject: "Forgot Password OTP",
      html: `<body><h2>OTP</h2><p>${otp}</p></body>`,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        throw err;
      } else {
        res.status(200).json({
          success: true,
          info,
        });
      }
    });
  } catch (error) {
    next(error);
  }
};


// @method   POST
// @route   /api/v1/changepassword

exports.changePassword = async (req, res, next) => {
  try {
    const email = req.params.email;
    const { password, confirmPassword } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      const err = new Error("No user found");
      err.statusCode = 404;
      throw err;
    }
    const hashPassword = await bcryptjs.hash(password,12);
    if(password === confirmPassword) {
      const pass = await User.findByIdAndUpdate(user._id,{password : hashPassword},{new : true})
      res.status(200).json({
        success : true,
        message : 'Password Changed',
        password : pass.password
      })
    }
  } catch (error) {
    next(error);
  }
};
