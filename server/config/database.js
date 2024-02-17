const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URL;


exports.connect = () => {
    mongoose.connect(url)
    .then( () => console.log("DB cunnection successfully"))
    .catch( (error) => {
        console.log("DB connection failed")
        console.error(error);
        process.exit();
    })
}