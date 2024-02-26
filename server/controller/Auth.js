const bcrypt = require('bcrypt');
const User = require("../models/user");
const OTP = require("../models/otp");
const otpGenerator = require("otp-generator");
const jwt = require('jsonwebtoken');
const mailSender = require("../utils/mailSender");


exports.signUp = async (req, res) => {
    try{
        console.log(req.body);

        const {firstName , lastName ,email , password , confirmPassword ,otp} = req.body;

        if(!firstName || ! lastName || ! email || !password || ! confirmPassword || !otp) {
            return res.status(401).send({
                success:false,
                message:" all field are required",
            })
        }

        if(password !== confirmPassword) {
            return res.status(402).json({
                success:false,
                message:"password and confirm password is not match",
            })
        }

        const existingUser =  await User.findOne({email});

        if(existingUser){
            return res.status(402).json({
                success:false,
                message:"User already exits , please sign in to continue",
            })
        }

        const response  = await OTP.find({email}).sort({createdAt:-1}).limit(1);

        if(response.length === 0){
            res.status(403).json({
                success:false,
                message:"Otp is not valid",
            })
        }
        else if (otp !== response[0].otp){
            res.status(403).json({
                success:false,
                message:"otp is not valid",
            })
        }

        // hash password
        
        const hashedPassword = await bcrypt.hash(password, 10);

        if(!hashedPassword){
            return res.status(200).json({
                success:false,
                message:"password problem"
            })
        }

        const user = await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            image:`https://api.dicebear.com/7.x/lorelei/svg`
        });

        return res.status(200).json({
            success:true,
            user,
            message:"user registered successfully",
        });


    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"User can not be register please try agian"
        })
    }
}

exports.login = async (req,res) => {
    try {

        const { email , password} = req.body;

        if(!email || ! password) {
            return res.status(404).json({
                success:false,
                message:"All field are required",
            });
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(405).json({
                success:false,
                message:"User not exits , please sign up ",
            });
        }

        if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign(
                {email:user.email,id:user._id},
                process.env.JWT_SECRET,
                {
                    expiresIn:"24h"
                }
            )

            user.token = token;
            user.password = undefined;

            // set coockie for token 
            
            const options = {
                expires: new Date(Date.now() + 3*24*60*1000),
                httpOnly:true,
            }
            
            res.cookie("token",token ,options).status(200).json({
                success:true,
                token,
                user,
                message:"login successfully",
            })
        }
        else {
            return res.status(400).json({
                success:false,
                message:"Password is incorrect",
            })
        }


    } catch(error) {
        console.log(error)
        return res.status(400).json({
            success:false,
            message:"Login failed , please try again",
        })
    }
}


exports.sendOtp = async (req,res) => {
    try {
        const { email} = req.body;
        console.log(email);

        const userPresent = await User.findOne({email});

        if(userPresent) {
            return res.status(400).json({
                success:false,
                message:"User already present"
            }) 
        }

        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        });

        const result  = await OTP.findOne({otp:otp});

        while(result){
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            })
        }

        const otpPayload = {email,otp};

        const otpBody = await OTP.create(otpPayload);
        console.log(otpBody);

        res.status(200).json({
            success:true,
            message:"otp send successfully",
            otp
        })

    } catch(error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"OTP send faild"
        })
    }


}