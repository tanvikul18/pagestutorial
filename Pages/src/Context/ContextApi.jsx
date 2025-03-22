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
  
    const[isChecked,setChecked]=useState(false);

    const[rfdk,setRFdk]=useState(null);
    const[cfdk,setCFdk]=useState(null);
    const[clfdk,setClFdk]=useState(null);
  
    const[progress,setProgress]=useState(0);
    const[pageVisited,setpageVisited]=useState([]);
    const [isPrev,setisPrev]=useState(false);
    const[num,setNum]=useState(0);
    const[Value,setValue]=useState("--Select--");
    const[option,setOption]=useState(null);//radiobtnoption selected
    const[answers,setanswers]=useState([]);//userselected checkboxes
    const[menuArray,setmenuArray]=useState([]);//for menu
    const[isMenuOpen , setMenuOpen]=useState(false); //for hide show menu
   
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
        progress,setProgress,option,setOption,answers,setanswers,
        pageVisited,setpageVisited,clfdk,setClFdk,
        isPrev,setisPrev,rfdk,setRFdk,cfdk,setCFdk,num,setNum,Value,setValue,
        setDisabled,isChecked,setChecked,menuArray,setmenuArray
    };
   // console.log(value.percent)

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
