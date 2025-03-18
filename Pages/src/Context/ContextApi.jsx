import { createContext, useContext, useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { NavData } from '../Data/PagesData'
export const UserContext = createContext(); // ✅ Capitalized for convention

export const useUserContext = () => useContext(UserContext); // ✅ Pass context inside useContext

export const UserContextProvider = ({ children }) => {
    const { id } = useParams(); // ✅ Get id from URL
    const[pages,setPages]=useState(NavData);
    const[isNextDisabled,setNextDisabled]=useState(false);
    let QuesDetails={};
    let globalQuestionDetails=[];
    let transcriptDetails = {};
    let globalTRanscript=[];
    

    const value = {
       
        pages,
        setPages,
        QuesDetails,
        globalQuestionDetails,isNextDisabled,setNextDisabled,transcriptDetails,globalTRanscript
    };
   // console.log(value.percent)

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
