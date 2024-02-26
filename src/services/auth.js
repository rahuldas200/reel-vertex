import toast from "react-hot-toast";
import { apiConnector } from "./apiConnecter";
import { authEndpoints } from "./apis";

const { SIGN_UP,LOGIN,SEND_OTP} = authEndpoints;

export const sendOtp = async (email) => {
    let result;
    const toastId = toast.loading("sending OTP");

    try {
        const response  = await apiConnector("POST",SEND_OTP,email);

        console.log("Send otp response",response);

        if(response.status !== 200){
            throw new Error("Send otp api error")
        }
        result = response.data;

    }catch(error) {
        console.log("SEND OTP RESPONSE ERROR", error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
    
}

export const signIn = async (data) => {

    let result;
    const toastId = toast.loading("Loading...");

    try {
        const response  = await apiConnector("POST",SIGN_UP , data) ;

        console.log("Register Api response",response );

        if(response.status !== 200) {
            throw new Error("Registation api problem");
        }
        result = response?.data;

        toast.success("registation successfully");

    } catch (error) {
        console.log("Register Api error" ,error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const login = async (data) => {

    let result;
    const toastId = toast.loading("Loading");

    try {
        const response  = await apiConnector("POST",LOGIN , data) ;

        console.log("Register Api response",response );

        if(response.status !== 200) {
            throw new Error("Login api problem");
        }
        result = response?.data;

        toast.success("Login successfully");

    } catch (error) {
        console.log("Register Api error" ,error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

