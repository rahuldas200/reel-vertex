const mongose = require("mongoose");

const ratingAndReviewSchema = new mongose.Schema( 
    {
        user:{
            type:mongose.Schema.Types.ObjectId,
            // required:true,
            ref:"User"
        },
        rating: {
            type:Number,
            required:true,
        },
        review:{
            type:String,
            required:true,
        }
    }
)

module.exports = mongose.model("RatingAndReview",ratingAndReviewSchema);