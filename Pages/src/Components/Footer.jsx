 import React, { useState } from 'react'
 import Prevlogo from "/prev-icon.png"
 import Nextlogo from "/next-icon.png"

import Main from "./Main";
import { useNavigate, useParams } from 'react-router-dom';
import { useUserContext } from '../Context/ContextApi';
 export default function Footer() {
  const {id}= useParams();
  const navigate= useNavigate();
  const { pages,setPages,QuesDetails,globalQuestionDetails,isNextDisabled,setNextDisabled} = useUserContext();
    const [nextPg,setNextPg]=useState();
    const getPageValues = Object.values(pages);
    const filetredItems = getPageValues.filter(x=>{
      return  x.PgId == id
   })
 //  console.log("NextDetails",filetredItems)
    const NextPgId = filetredItems[0].NextPgId;
    const PrevPgId = filetredItems[0].PrevPgId;
    const Questype = filetredItems[0].PgType;
   console.log(isNextDisabled);
    const handleNext=(NextPgId)=>{
      console.log("NextPgId",NextPgId)
      navigate(`/page/${NextPgId}`)
    }
    const handlePrev=(PrevPgid)=>{
      navigate(`/page/${PrevPgid}`)
    }
   return (
     <div className='footer-navigation'>
      
         <button className="btnPrev" id="btnPrevP" disabled={PrevPgId === null}  onClick={()=>handlePrev(PrevPgId)}><img src={Prevlogo}/>Prev</button>
         <button className='btnNext' disabled={isNextDisabled} id="btnNextP"  onClick={()=>handleNext(NextPgId)}>Next<img src={Nextlogo}/></button>
        
     </div>
   )
 }
