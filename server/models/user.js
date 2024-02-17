const mongose = require("mongoose");

const UserSchema = new mongose.Schema(
    {
        firstName: {
            type:String,
            required:true,
            trim:true,
        },
        lastName: {
            type:String,
            required:true,
            trim:true,
        },
        email: {
            type:String,
            required:true,
            trim:true,
        },
        password: {
            type:String,
            required:true,
        },
        image : {
            type:String,
            required:true,
        },
        retingAndReview:[
            {
                type:mongose.Schema.Types.ObjectId,
                ref:"RatingAndReview"
            }
        ],
        token: {
            type:String,
        }
    }
)

module.exports = mongose.model("User",UserSchema);