const express = require("express");
const {register,confirmOtp,login,profile,updateProfile,resetPassword,upload,changePassword} = require("../controllers/auth");
const {protected} = require('../utils/protected');

const router = express.Router();

router.post('/register',register);

router.post("/confirm/:email",confirmOtp)

router.post("/login",login);

router.get("/profile",protected,profile);

router.post("/updateprofile",protected,updateProfile);

router.post('/resetpassword',resetPassword);

router.post("/upload/:id",upload);

router.post('/newpassword/:email',protected,changePassword);

module.exports = router;

