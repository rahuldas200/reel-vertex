const express = require("express");
const router = express.Router();


const {signUp,login,sendOtp} = require("../controller/Auth");
const {videoDownload} = require("../controller/videoDownload");
const {createReview,getAllReview} = require("../controller/Reting");

router.post("/signup",signUp);
router.post("/login",login);
router.post("/sendotp",sendOtp);
router.get("/downloadvideo",videoDownload);
router.post("/createReviewReting",createReview);
router.get("/allReview",getAllReview);


module.exports = router