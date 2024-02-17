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

// app.use(
//     cors({
//         origin: 'http://localhost:3000'
        
//     })
// )
app.use("/api/v1/auth",userRoute);

app.get('/', (req, res) => {
    return res.json({
        success:true,
        message:"Your server is up and running....."
    })
});

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
});
