import { createContext, useContext, useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { NavData } from '../Data/PagesData'
export const UserContext = createContext(); // ✅ Capitalized for convention

export const useUserContext = () => useContext(UserContext); // ✅ Pass context inside useContext

export const UserContextProvider = ({ children }) => {
    const { id } = useParams(); // ✅ Get id from URL
    const[pages,setPages]=useState(NavData);
    const[isNextDisabled,setNextDisabled]=useState(false);
    const[isDisabled,setDisabled]= useState(false);
    const[globalQuestionDetails,setglobalQuestionDetails]=useState([]);
    const[globalTRanscript,setglobalTRanscript]=useState([])
    const[MenuDisabled,setmenuDisabled]=useState({})
   
    const value = {       
        pages,
        setPages,        
        globalQuestionDetails,
        setglobalQuestionDetails,
        isNextDisabled,
        setNextDisabled,
        globalTRanscript,
        setglobalTRanscript,
        isDisabled,
        setDisabled,MenuDisabled,setmenuDisabled
    };
   // console.log(value.percent)

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
