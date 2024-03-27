import { toast } from "react-toastify";

export const saveToLocalStorage = (data) =>{
    const savedData = JSON.parse(localStorage.getItem("readBook")) || [];
    const existedData = savedData.find((item) => item.id == data.id);
    if(!existedData){
        savedData.push(data);
        localStorage.setItem("readBook", JSON.stringify(savedData));
        toast.success("Read Book Successfully")
    }
    else{
        toast.warning("Book Allready Read");
    }

    
};

export const getFromLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem("readBook")) || [];
    return data;
};
