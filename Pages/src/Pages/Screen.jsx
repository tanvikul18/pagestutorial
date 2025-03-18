import React, { useEffect, useState } from 'react'
import demoLogo from "/demo.jpg"
import { useUserContext } from '../Context/ContextApi';
import { useParams } from 'react-router-dom';
export default function Screen() {
    let {pages,setPages,QuesDetails,globalQuestionDetails,isNextDisabled,setNextDisabled,transcriptDetails,globalTRanscript} = useUserContext();
    const[scrTxt,setscrTxt]=useState(null);
    const[scrTitle,setscrTitle]=useState(null);
    const[scrType,setscrType]=useState(null);
    const {id} = useParams();
    const Details = Object.values(pages);
    transcriptDetails={
      ScrTitle : scrTitle,
      ScrTxt : scrTxt,
      ScrType : scrType
    }
    globalTRanscript.push(transcriptDetails)
    console.log(globalTRanscript)
    useEffect(()=>{
      const filetredItems = Details.filter(x=>{
        return  x.PgId == id
     })
     setscrTxt(filetredItems[0].scrTxt);
     setscrTitle(filetredItems[0].PgTitle)
     setscrType(filetredItems[0].PgType)
    },[])
    
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
 