import React, { useEffect, useState } from 'react'
import demoLogo from "/demo.jpg"
import { useUserContext } from '../Context/ContextApi';
import { useParams } from 'react-router-dom';
import { _gStartPageId } from '../Data/PagesData';

export default function Screen() {
    let {pages,setPages,QuesDetails,globalQuestionDetails,isNextDisabled,setNextDisabled,globalTRanscript,setglobalTRanscript} = useUserContext();
    const[scrTxt,setscrTxt]=useState(null);
    const[scrTitle,setscrTitle]=useState(null);
    const[scrType,setscrType]=useState(null);
    let {id} = useParams();
    const Details = Object.values(pages);
    if(id == undefined || id == ''){
          id=_gStartPageId;
        }
       let transcriptDetails={
          ScrTitle : scrTitle,
          ScrTxt : scrTxt,
          ScrType : scrType
        }
       
  console.log("globalTRanscript",globalTRanscript)
    useEffect(()=>{
      const filetredItems = Details.filter(x=>{
        return  x.PgId == id
     })
     setscrTxt(filetredItems[0].scrTxt);
     setscrTitle(filetredItems[0].PgTitle)
     setscrType(filetredItems[0].PgType)
  
    },[])
    useEffect(()=>{
        setglobalTRanscript([...globalQuestionDetails,transcriptDetails])
    },[scrTitle,scrTxt])
  return (
    <div>
         <h2 className='actPgheader'>{scrTitle}</h2>
        <div className='activity'>
            <img src={demoLogo}/>
             <p>{scrTxt}</p>
        </div>
      
    </div>
  )
}
 