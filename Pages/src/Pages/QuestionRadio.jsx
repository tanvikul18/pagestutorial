import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/ContextApi';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Result from './Result';
export default function QuestionRadio() {
  let {pages,globalQuestionDetails,setglobalQuestionDetails,setNextDisabled,globalTRanscript,setglobalTRanscript,isDisabled,setDisabled} = useUserContext();
  
  const {id} = useParams();
  const[option,setOption]=useState(null);
  const[score,setScore]=useState(0);
  const[maxscore,setMaxscore]=useState(0);
  const[fdk,setFdk]=useState(null);
  const[pgTitle,setPgTitle]=useState(null);
  const[quesTxt,setquesTxt]=useState('');
  const[isOption1,setisOption1]=useState(false);
  const[isOption2,setisOption2]=useState(false);
  const[isOption3,setisOption3]=useState(false);
  const[shwFdk,setShwFdk]=useState(false);
  const[spanId,setspanId]=useState(null);
  const[isActive,setActive]=useState(true);
  const[quesOptions,setquesOptions]=useState();
  const[getFdata,setFdata]=useState([]);

 // console.log(pages)
 
 let transcriptDetails={
  QuesTitle : pgTitle,
  QuesTxt : quesTxt,
  ScrType : "QuestionRadio"
}

const Details = Object.values(pages);  
const filetredItems = Details.filter(x=>{
  return  x.PgId == id
})
useEffect(()=>{
  setPgTitle(filetredItems[0].PgTitle)
  setquesTxt(filetredItems[0].quesTxt);
  setNextDisabled(true);
},[])

 const getOptionDetails = filetredItems[0].options;
 const {OptId1,OptId2,OptId3,Op1Txt,Op2Txt,Op3Txt,NoOfOptions,ScoreOp1,ScoreOp2,ScoreOp3,Fdk1,Fdk2,Fdk3}= getOptionDetails;
 
 useEffect(()=>{
  setglobalTRanscript([...globalTRanscript,transcriptDetails])
    },[pgTitle,quesTxt])

  
 // setNextDisabled(true);
  const handleSubmit=(e)=>{
       e.preventDefault();
       
       let QuesDetails = {
              OptionId: option,
              OptionScore: score,
              Optionfeedback: fdk,
              QuesTitle: pgTitle ,
              OptionMaxScore:maxscore,
              QuesText: quesTxt,
              QuesOptions: quesOptions,
              isQuestionAttempted: true
       }
      
        setShwFdk(!shwFdk);
        setDisabled(true)
        setNextDisabled(false);
        setActive(true);
        option == "rdo1" ? setisOption1(true) : (( option == "rdo2") ? (setisOption2(true)) : (setisOption3(true)))
       console.log(QuesDetails);
        setglobalQuestionDetails([...globalQuestionDetails,QuesDetails])
       //console.log("globalQuestionDetails -Q1",getFdata);
       //document.getElementsByName("radioQ1").forEach(x=>x.setAttribute("disabled","true"));
     
     
  }
  const handleRadioOption=(OptId,ScoreOp,Fdk,e)=>{
 //   console.log("Details",OptId,ScoreOp,Fdk)
    const getSlectedId= e.target.id;
    const getspanSelected = getSlectedId+"_span";
   //  console.log("spanid",getspanSelected)
   setActive(false);
    setOption(OptId);
    setScore(ScoreOp);
    setFdk(Fdk);
  
    setspanId(getspanSelected)
    setMaxscore(filetredItems[0].MaxScore)
  
    setquesOptions(document.getElementById('option-group').innerHTML)
    console.log("globalQuestionDetails -Q1",globalQuestionDetails);
  }
  return (
    <div>
        <h2 style={{textAlign:"left",paddingLeft:"10px"}}>{ filetredItems[0].PgTitle}</h2>
        <div className='ques-Content' id="quesContent">
            <div className='questionTxt' id='questionTxt'>
              {filetredItems[0].quesTxt}
                <p><em> Select an option from the choices below and click <strong>Submit.</strong></em></p>
            </div>           
               <form onSubmit={handleSubmit} style={{"width":"60%"}}>
                 <div className='option-group' id="option-group">
                   <input type="radio"  id={OptId1}  score={ScoreOp1} feedback={Fdk1} disabled={isDisabled} name="radioQ1" onChange={(e)=>handleRadioOption(OptId1,ScoreOp1,Fdk1,e)}/>
                   <span id={OptId1 + "_span"} style={{color :  isOption1 ? 'red' :'black' }}>{Op1Txt}</span><br/>
                 
                   <input type="radio" id={OptId2} score={ScoreOp2} feedback={Fdk2} disabled={isDisabled} name="radioQ1" onChange={(e)=>handleRadioOption(OptId2,ScoreOp2,Fdk2,e)}/>
                   <span  id={OptId2+ "_span"} style={{color :  isOption2 ? 'blue' :'black'}}>{Op2Txt}</span><br/>
                  
                   <input type="radio" id={OptId3} score={ScoreOp3} feedback={Fdk3} disabled={isDisabled} name="radioQ1" onChange={(e)=>handleRadioOption(OptId3,ScoreOp3,Fdk3,e)}/>
                   <span id={OptId3+ "_span"} style={{color :  isOption3 ? 'green' :'black'}}>{Op3Txt}</span><br/>
                   </div>
                   <button className='btnSubmit' id="btnSubmit" disabled={isActive}>Submit</button>
               </form>
               {
                 <div className={`feedback ${shwFdk ? 'active': 'hidden'}`} id="fdkdiv">
                   
                          <p>{fdk}</p>
                          <p><em>Click <strong>Next</strong> to continue.</em></p>
                    </div>
              }
            
        </div>
                      
           
    </div>
  )
}
