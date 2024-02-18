const axios = require('axios');
require("dotenv").config();
const apikey = process.env.X_REPIDAPI_KEY;
const apihost = process.env.X_REPIDAPI_HOST;

exports.videoDownload = async (req,res) => {
    
    try {
        const  link  = req.headers['link'];
        console.log(link);

        if(!link){
            console.log("link rwquired")
            return res.status(404).json({
                success: false,
                message: "link rquired",
            });
            
        }

        const options = {

            method: 'GET',
            url: 'https://instagram-post-reels-stories-downloader.p.rapidapi.com/instagram/',
            params: {
                url: link,
            },
            headers: {
                'X-RapidAPI-Key':apikey,
                'X-RapidAPI-Host':apihost,
            }
        };
       

        const response = await axios.request(options);
        // Log the entire response to inspect its structure

        if (response?.data) {
            return res.status(200).json({
                success: true,
                data:response?.data, // Assuming the data you need is in the response body
            });
        } else {
            // Handle unexpected response structure
            return res.status(404).json({
                success: false,
                message: "Unexpected response structure",
            });
        }

    } catch (error) {
        // console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
