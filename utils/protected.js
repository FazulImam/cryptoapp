const jwt = require('jsonwebtoken');
const User = require('../models/Users');
require("dotenv").config({
  path: "../.env",
});

exports.protected = async (req, res, next) => {
  try {
    const authHeader = await req.headers.authorization;
    if(!authHeader) {
      const err = new Error("Header authorization missing");
      err.statusCode = 401;
      throw err;
    }
    const token = authHeader.split(" ")[1];
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(id);

    if (!user) {
      const err = new Error("No user found");
      err.statusCode = 404;
      throw err;
    }

    req.user = user;
    next();

  } catch (error) {
    console.log(req.headers.authorization)
    next(error);
  }
};
