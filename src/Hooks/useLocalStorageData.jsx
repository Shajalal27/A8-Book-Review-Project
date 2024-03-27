import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Utils/localStorage";


const useLocalStorageData = () => {
    const [localData, setLocalData] = useState([]);
        // console.log(localData);

    useEffect( () =>{
        setLocalData(getFromLocalStorage());
    }, [])
    return {localData};
};

export default useLocalStorageData;