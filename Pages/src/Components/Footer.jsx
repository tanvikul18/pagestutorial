 import React, { useEffect, useState } from 'react'
 import Prevlogo from "/prev-icon.png"
 import Nextlogo from "/next-icon.png"

import Main from "./Main";
import { useNavigate, useParams } from 'react-router-dom';
import { useUserContext } from '../Context/ContextApi';
import { _gStartPageId } from '../Data/PagesData';

 export default function Footer() {
  let {id}=useParams();
  const navigate= useNavigate();
   let {pages,setPages,globalQuestionDetails,isNextDisabled,setNextDisabled,transcriptDetails,globalTRanscript,isDisabled,setDisabled} = useUserContext();
      const [nextPg,setNextPg]=useState();
      const [prevPg,setPrevPg]=useState();
      const [quesType,setquesType]=useState();
   useEffect(()=>{
    const getPageValues = Object.values(pages);
    if(id == undefined || id == ''){
      id=_gStartPageId;
    }
    const filetredItems = getPageValues.filter(x=>{
      return  x.PgId == id;
   })
   setNextPg(filetredItems[0].NextPgId);
   setPrevPg(filetredItems[0].PrevPgId);
   setquesType(filetredItems[0].PgType);
   },[id])
 
    const handleNext=(NextPgId)=>{
      console.log("NextPgId",NextPgId)
      navigate(`/page/${NextPgId}`)
    }
    const handlePrev=(PrevPgid)=>{
      debugger;
     if(PrevPgid == _gStartPageId){
      navigate('/')
     }
     else{
      navigate(`/page/${PrevPgid}`)
     }
    }
   return (
     <div className='footer-navigation'>
      
         <button className="btnPrev" id="btnPrevP" disabled={nextPg === null}  onClick={()=>handlePrev(prevPg)}><img src={Prevlogo}/>Prev</button>
         <button className='btnNext' disabled={isNextDisabled} id="btnNextP"  onClick={()=>handleNext(nextPg)}>Next<img src={Nextlogo}/></button>
        
     </div>
   )
 }
