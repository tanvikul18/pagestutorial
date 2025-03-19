import React, { useEffect, useState,useCallback } from 'react'
import {NavData,_gStartPageId} from "../Data/PagesData.js"
import Screen from '../Pages/Screen'
import QuestionRadio from '../Pages/QuestionRadio.jsx';
import QuestionChecklist from '../Pages/QuestionChecklist';
import QuestionDnD from '../Pages/QuestionDnD.jsx';
import Result from '../Pages/Result.jsx';
import { useParams } from 'react-router-dom';

export default function Main() {
   const {id}= useParams();
  // console.log(id)
    const [data,setData]= useState(NavData);
    const [getPage,setPageData]=useState([]) ;
  
    const componentMap = {
        Screen: <Screen/>,
        QuestionRadio: <QuestionRadio />,
        QuestionChecklist: <QuestionChecklist />,  
        QuestionDnD: <QuestionDnD/>   , 
        Result: <Result/>
      
      };
     
      const getPageId = (Id) => {
        debugger;
        if (!Id) {
          Id = _gStartPageId;
        }
       // console.log("Id",Id)
        const List = Object.values(data);
      //  console.log("List",List)
        const filteredItems = List.filter(x =>{ 
         // console.log(x.PgId)
          return x.PgId == Id});
        console.log("filetredItems",filteredItems)
        setPageData(filteredItems);
      };
    
    
   // console.log("selectedCompoenent",getPage[0]?.PgType)
    useEffect(()=>{
      console.log("Current Id",id)
        getPageId(id);        
       
    },[id])
   
  return (
    <div className='main'>
     
      
        {
          getPage[0]?.PgType ? componentMap[getPage[0].PgType] : null
        }
     
       
     
     </div>
  )
}
