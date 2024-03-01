import toast from "react-hot-toast";
import { apiConnector } from "./apiConnecter";
import { ReviewEndPoints } from '../services/apis'

const {CREATE_REVIEW_API,GET_ALL_REVIEW_API} = ReviewEndPoints

export const CreateReview = async (data) => {
    let result;
    const toastId = toast.loading("Loading....");
    console.log(data);

    try{

        const response  = await apiConnector("POST",CREATE_REVIEW_API,data)

        if(!response){
            throw  new Error("CREATE_REVIEW_API error")
        }

        console.log(response);
        result = response;       

    }
    catch(error){
        
        console.log("CREATE_REVIEW_API error", error);
        toast.error(error.message);
    }
    
    toast.dismiss(toastId);
    return result;   
}

