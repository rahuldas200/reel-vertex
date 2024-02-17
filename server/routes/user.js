const express = require("express");
const router = express.Router();


const {signUp,login,sendOtp} = require("../controller/Auth");
const {videoDownload} = require("../controller/videoDownload");

router.post("/signup",signUp);
router.post("/login",login);
router.post("/sendotp",sendOtp);
router.post("/downloadvideo",videoDownload);


module.exports = router