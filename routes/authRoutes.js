const express = require("express");
const {body} = require("express-validator");
const {register,confirmOtp,login,profile,updateProfile,resetPassword,upload,changePassword} = require("../controllers/auth");
const {protected} = require('../utils/protected');

const router = express.Router();

router.post('/register',[
    body('firstName').trim().notEmpty().isLength({min:2,max:50}).withMessage("First Name must be minimum 2 and maximum 50 letters"),
    body("lastName").trim().notEmpty().isLength({min:2,max:50}).withMessage("First Name must be minimum 2 and maximum 50 letters"),
    body("email").trim().isEmail().notEmpty().withMessage("Please add a valid email"),
    body('password').trim().isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/\d/).withMessage('Password must contain at least one number')
    .matches(/[a-zA-Z]/).withMessage('Password must contain at least one letter')
    .escape(),
],register);

router.post("/confirm/:email",confirmOtp)

router.post("/login",[
    body("email").trim().isEmail().notEmpty().withMessage("Please add a valid email"),
    body('password').trim().isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/\d/).withMessage('Password must contain at least one number')
    .matches(/[a-zA-Z]/).withMessage('Password must contain at least one letter')
    .escape(),
],login);

router.get("/profile",protected,profile);

router.post("/updateprofile",protected,updateProfile);

router.post('/resetpassword',resetPassword);

router.post("/upload/:id",upload);

router.post('/newpassword/:email',protected,changePassword);

module.exports = router;

