// app.js
const express = require('express');
const app = express();
const userRoute = require("./routes/user");
const dotenv = require("dotenv")
const database  = require("./config/database");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 4000

database.connect();

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
    cors({
        origin: '*',
        credentials:true,       
        optionSuccessStatus:200
        
    })
)

// app.get("/", (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
// });

app.use("/api/v1/auth",userRoute);

app.get('/', (req, res) => {
    return res.json({
        success:true,
        message:"Your server is up and running....."
    })
});
app.get("/api/v1/auth", (req, res) => {
    return res.json({
        success:true,
        message:"Your server is up and running....."
    })
});

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
});
