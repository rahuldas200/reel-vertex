const BASE_URL = 'http://localhost:4000/api/v1';

export const downLoadEndPoints = {
    DOWNLOAD_URL :BASE_URL+"/auth/downloadvideo",
}

export const authEndpoints = {
    SIGN_UP :BASE_URL+"/auth/signup",
    LOGIN : BASE_URL+"/auth/login",
    SEND_OTP :BASE_URL+"/auth/sendotp"
}



