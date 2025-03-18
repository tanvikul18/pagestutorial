import React, { useState } from 'react'
import { useUserContext } from '../Context/ContextApi';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
export default function QuestionRadio() {
  let {pages,setPages,QuesDetails,globalQuestionDetails,isNextDisabled,setNextDisabled,transcriptDetails,globalTRanscript} = useUserContext();
  const {id} = useParams();
  const[option,setOption]=useState(null);
  const[score,setScore]=useState(0);
  const[maxscore,setMaxscore]=useState(0);
  const[fdk,setFdk]=useState(null);
  const[pgTitle,setPgTitle]=useState(null);
  const[quesTxt,setquesTxt]=useState('');
  const[color,setColor]=useState("black");
  const[shwFdk,setShwFdk]=useState(false);
  const[spanId,setspanId]=useState(null);
 // console.log(pages)
  const Details = Object.values(pages);
  const filetredItems = Details.filter(x=>{
    return  x.PgId == id
 })
  const getOptionDetails = filetredItems[0].options;
 // console.log("GetOptionDetails",getOptionDetails)
  const {OptId1,OptId2,OptId3,Op1Txt,Op2Txt,Op3Txt,NoOfOptions,ScoreOp1,ScoreOp2,ScoreOp3,Fdk1,Fdk2,Fdk3}= getOptionDetails;
  let Count = 0;
 // setNextDisabled(true);
  const handleSubmit=(e)=>{
       e.preventDefault();
     
     //  console.log("Question laoded")
       document.getElementById("btnSubmit").setAttribute("disabled","disabled");
       QuesDetails = {
              OptionId: option,
              OptionScore: score,
              Optionfeedback: fdk,
              QuesTitle:pgTitle ,
              OptionMaxScore:maxscore,
              QuesText: quesTxt
       }
       if(score == 5){         
            document.getElementById(spanId).style.color = "green";
       }
       else if(score == 3){       
          document.getElementById(spanId).style.color = "blue";        
       }
       else{
          document.getElementById(spanId).style.color = "red";
        }
        setShwFdk(!shwFdk);
     
       globalQuestionDetails.push(QuesDetails);
       console.log("Ques 1 data",globalQuestionDetails);
       document.getElementsByName("radioQ1").forEach(x=>x.setAttribute("disabled","true"));
       document.getElementById("btnNextP").disabled=false;
       document.getElementById("btnNextP").removeAttribute('disabled')
       setNextDisabled(false);
     
  }
  const handleRadioOption=(OptId,ScoreOp,Fdk,e)=>{
 //   console.log("Details",OptId,ScoreOp,Fdk)
    const getSlectedId= e.target.id;
    const getspanSelected = getSlectedId+"_span";
  //  console.log("spanid",getspanSelected)
    Count++; 
    setOption(OptId);
    setScore(ScoreOp);
    setFdk(Fdk);
    setPgTitle(Details[1].PgTitle);
    setspanId(getspanSelected)
    setMaxscore(filetredItems[0].MaxScore)
    setquesTxt(document.getElementById("quesContent").innerHTML);
  //  console.log("Count",Count)
    document.getElementById("btnSubmit").removeAttribute("disabled");
  }
  return (
    <div>
        <h2 style={{textAlign:"left",paddingLeft:"10px"}}>{ filetredItems[0].PgTitle}</h2>
        <div className='ques-Content' id="quesContent">
            <div className='questionTxt' id='questionTxt'>
              {filetredItems[0].quesTxt}
                <p><em> Select an option from the choices belwo and click <strong>Submit.</strong></em></p>
            </div>           
               <form onSubmit={handleSubmit} style={{"width":"60%"}}>
                 <div className='option-group'>
                   <input type="radio"  id={OptId1}  score={ScoreOp1} feedback={Fdk1} name="radioQ1" onChange={(e)=>handleRadioOption(OptId1,ScoreOp1,Fdk1,e)}/>
                   <span id={OptId1 + "_span"} style={{color:`${color}`}}>{Op1Txt}</span><br/>
                 
                   <input type="radio" id={OptId2} score={ScoreOp2} feedback={Fdk2} name="radioQ1" onChange={(e)=>handleRadioOption(OptId2,ScoreOp2,Fdk2,e)}/>
                   <span  id={OptId2+ "_span"} style={{color:`${color}`}}>{Op2Txt}</span><br/>
                  
                   <input type="radio" id={OptId3} score={ScoreOp3} feedback={Fdk3} name="radioQ1" onChange={(e)=>handleRadioOption(OptId3,ScoreOp3,Fdk3,e)}/>
                   <span id={OptId3+ "_span"} style={{color:`${color}`}}>{Op3Txt}</span><br/>
                   </div>
                   <button className='btnSubmit' id="btnSubmit" disabled={Count == 0}>Submit</button>
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
