import toast from "react-hot-toast";
import { apiConnector } from "./apiConnecter";
import { downLoadEndPoints } from "./apis";

const { DOWNLOAD_URL } = downLoadEndPoints;

export const fetchReel = async (urlObject) => {
    let result;
    const toastId = toast.loading("Uploading your link");

    try {        
        
        const response = await apiConnector("POST",DOWNLOAD_URL,{link:urlObject},null,null);

        console.log("FOWNLOAD REEL API RESPONSE",response);

        if(response.data.data.status !== true){
            throw new Error("Fetch reel download link error");
        }
        console.log(response);
        result = response?.data?.data;
        toast.success("fetched download link you can dowload now");        
        
    } catch(error) {
        console.log("DOWNLOAD_URL API ERROR", error);
        toast.error(error.message);
    }

    toast.dismiss(toastId);
    return result;
}
 