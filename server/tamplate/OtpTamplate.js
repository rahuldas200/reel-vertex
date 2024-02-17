const otpTemplate = (otp,email,name) =>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body{
                background-color: #ffffff;
                font-size: 16px;
                color: rgb(10, 1, 1);
                margin: 0;
                padding: 0;
            }
            .container{
               
                max-width: 200px;
                margin: 10px auto;
                padding: 200px;
                text-align: center;
                border: 1px solid;           
            }
            
        </style>
    </head>
    <body>
        <div class="container">
            <h1>${name}</h1>
            <p>Please verify that your email address is 
                <span>${email}</span>
            </p>
            <div>
                <h1>${otp}</h1>
            </div>
            <p>Thank you </p>
        </div>
    </body>
    </html>`
}

module.exports = otpTemplate;