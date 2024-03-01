const User = require("../models/user");
const RatingAndReview = require("../models/ratingAndReview");
const user = require("../models/user");

exports.createReview = async (req,res) => {
    try{
       
        const {userId , review, rating} = req.body
        console.log(req.body);
        console.log(review , rating)

        if(!userId) {
           return  res.status(201).json({
            success:false,
            message:"User not found"
           });
        }
        if(!review || !rating) {
            return  res.status(201).json({
             success:false,
             message:"All filed are required",
            });
        }

        const user = await User.findById(userId);

        console.log(user);

        if(!user){
            return  res.status(201).json({
                success:false,
                message:"User not found",
            });
        }

        const newReview = await RatingAndReview.create({
            user:user._id,
            rating,
            review,
        })

        if(!newReview) {
            console.log("someProblem in your application");
        }

        const UserReview  = await User.findByIdAndUpdate(user._id , {
            $push: { retingAndReview: newReview._id }
        },{new:true});

        console.log(UserReview);

        return res.status(200).json({
            success:true,
            message:"Review Create successfully",
            UserReview,
        })

    } catch (error){
        console.log(error)
        return  res.status(404).json({
            success:false,
            message:"User not found",
        });
    }
}

exports.getAllReview = async (req,res) => {

    try {

        const AllRetingAndReview = await RatingAndReview.find().populate("user");

        if(!AllRetingAndReview){
            return  res.status(201).json({
                success:false,
                message:"There are no reting and review",
            });
        }

        return res.status(200).json({
            success:true,
            message:"all Reting and Reting and review are fatched",
            data:AllRetingAndReview
        })


    } catch (error){
        return res.status(400).json({
            success:false,
            message:"all Reting and Reting and review are not fatched",
        })
    }
}