
import { toast } from "react-toastify";


export const saveToLocalStorage = (data) =>{


    const readData = JSON.parse(localStorage.getItem("readBook")) || [];
    const wishData = JSON.parse(localStorage.getItem("wishBook")) || [];
    
    const existedDataRed = readData.find((item) => item.id === data.id);
    const existedDataWish = wishData.find((item) => item.id === data.id);

    if(!existedDataRed ){
        readData.push(data);
        localStorage.setItem("readBook", JSON.stringify(readData));
        toast.success("Read Book Successfully")
    }
   
    else if(existedDataRed && !existedDataWish){
        wishData.push(data);
        localStorage.setItem("wishBook", JSON.stringify(wishData));
        toast.info("Wished Book Successfully")
    }
    else{
        toast.warning("Allready Book Read");
    }

};

export const getFromLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem("readBook")) || [];
    return data;
};

export const getLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem("wishBook")) || [];
    return data;
};

