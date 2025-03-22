import React, { use, useEffect, useState } from 'react'
import { useUserContext } from '../Context/ContextApi';
import { useParams } from 'react-router-dom';
import DropDown from '../Components/DropDown';
import Input from '../Components/Input';

export default function Cloze() {
 
 const[quesTXt,setQuesTxt]=useState('');
 const[countchk,setcountChk]=useState(0);
 const[Crtcount,setCrtCount]=useState(0);
 const[isActive,setActive]=useState(true); 
 const[shwFdk,setShwFdk]=useState(false);
   const[pgTitle,setPgTitle]=useState(null);
 const[score,setScore]=useState(0);
 const[maxscore,setMaxscore]=useState(0);
 const[isinputdisabled,setinputdisabled]=useState(false)
 const[isdrpdisabled,setdrpdisabled]=useState(false)
  let {pages,globalQuestionDetails,setglobalQuestionDetails,setNextDisabled,globalTRanscript,setglobalTRanscript,isDisabled,setDisabled,clfdk,setClFdk,isPrev,setisPrev,num,setNum,Value,setValue,menuArray,setmenuArray} = useUserContext();
  const {id} = useParams();
  const Details = Object.values(pages);  
  const filetredItems = Details.filter(x=>{
  return  x.PgId == id
  })
  const getOptionDetails = filetredItems[0].options;
 const {CrtDrpdwnOption,CrtinputOption,CrtScore,IncrtScore,MaxScore,FdkCrt,FdkIncrt}= getOptionDetails;
 let transcriptDetails={
    QuesTitle : pgTitle,
    QuesTxt : ' This is a cloze question where it will have a dropdown and an input box.Its baseically a combination of both elements.',
    DropdownOption: '',
    InputOption: '',
    Id: id,
    ScrType : "Cloze"
  }
  useEffect(()=>{
    setglobalTRanscript([...globalTRanscript,transcriptDetails])  
  },[transcriptDetails.QuesTxt])
  useEffect(()=>{
    if(isPrev){
      setDisabled(true);
      setShwFdk(true)
      setClFdk(clfdk)
      setNextDisabled(false)
      setinputdisabled(true)
      setdrpdisabled(true)
   } 
   setPgTitle(filetredItems[0].pgTitle)
  // setmenuArray([...menuArray,"Decision Point: Cloze Example"])
  },[])
 const handleNumber=(e)=>{
    setNum(e.target.value)
    console.log("entetrd Value",e.target.value)
    
    if(CrtinputOption == e.target.value){
         setCrtCount(prev => prev + 1)
    }
    getScoreandFedk();
    setActive(false)
   
}
 const handleDropdown=(e)=>{
    debugger;
       setValue(e.target.value)
       console.log("entetrd Value",e.target.value)
     
       if(CrtDrpdwnOption == e.target.value){
        setCrtCount(prev => prev + 1)
   }
   getScoreandFedk();
   setMaxscore(5)
   setActive(false)
   
 }   
 
 
  
const getScoreandFedk=()=>{
    if(Crtcount == 2){
        setClFdk(FdkCrt)
        setScore(CrtScore)
    }
    else{
     setClFdk(FdkIncrt);
     setScore(IncrtScore);
    }
}                  
const handleSubmit=(e)=>{
   e.preventDefault();
   
   console.log("crtCount",Crtcount)
  
   setActive(true);
   
   setShwFdk(!shwFdk)
   setDisabled(true)
   setinputdisabled(true) 
   setdrpdisabled(true)
   setglobalTRanscript((prevItems) => 
    prevItems.map((item) =>
      item.ScrType === "Cloze"
        ? { ...item, DropdownOption: Value,InputOption:num } // Correct update syntax
        : item
    )
  );
  let QuesDetails = {
   
    OptionScore: score,
    Optionfeedback: clfdk,
    QuesTitle: pgTitle,
    OptionMaxScore: maxscore,
    QuesText: "This is a cloze question where it will have a dropdown and an input box.Its baseically a combination of both elements.",
    Questype: "Cloze",   
    DropDownValue: Value,
    InputValue: num,
    isdrpdisabled: true,
    isinputdisabled: true,  
    isQuestionAttempted: true,
  };

   setglobalQuestionDetails([...globalQuestionDetails, QuesDetails]);
   
}
                      
  return (
    <div>
      <h2 style={{textAlign:"left",paddingLeft:"10px"}}>{pgTitle}</h2>
       <div className='ques-Content' id="quesContent">
                  <div className='questionTxt' id='questionTxt'>
                  This is a cloze question where it will have a dropdown and an input box.Its baseically a combination of both elements.
                    <DropDown Value={Value} handleDropdown={handleDropdown} isdrpdisabled={isdrpdisabled}/><Input num={num} value={num} isinputdisabled={isinputdisabled} handleNumber={handleNumber}/>  <p>Please select asnwers and click on <strong>Submit</strong>.</p>
                
                  </div> 
                      
                     <button className='btnSubmit' id="btnSubmit" disabled={isActive} onClick={handleSubmit}>Submit</button>
                   <div className={`feedback ${shwFdk ? 'active': 'hidden'}`} id="fdkdiv">                         
                                <p>{clfdk}</p>
                                <p><em>Click <strong>Next</strong> to continue.</em></p>
                    </div>
                    
                  
              </div>
    </div>
  )
}
