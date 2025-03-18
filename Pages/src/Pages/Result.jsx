import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/ContextApi';
export default function Result() {
   let {pages,setPages,QuesDetails,globalQuestionDetails} = useUserContext();
  const[totalScore,settotalScore]= useState(0);
  const[totalmaxScore,settotalmaxScore]= useState(0);
  const[totalscorePercent,settotalscorePercent]= useState(0);
   const generateResullHtml=()=>{
    let resultHtml = '';
    for(let n21 = 0; n21 < globalQuestionDetails.length;n21++){
      resultHtml += `<div className='questionDetails'><div className='que-header' id="QuesTxt"><h3>${globalQuestionDetails[n21].QuesTitle}</h3><span>Points ${globalQuestionDetails[n21].OptionScore} out of ${globalQuestionDetails[n21].OptionMaxScore}</span></div><div className='que-data'>${globalQuestionDetails[n21].QuesText}</div><div className='ques-feedback'>${globalQuestionDetails[n21].Optionfeedback}</div></div>`;
     
    }
    document.getElementById("result-summary").innerHTML = resultHtml;
    for(let k21 = 0; k21 < globalQuestionDetails.length;k21++){
    document.getElementById(globalQuestionDetails[k21].OptionId).setAttribute('checked',"true")
    
    document.getElementById ("btnSubmit").remove(); 
    document.getElementsByName("radioQ1").forEach(x=>x.setAttribute("disabled","true"));
    document.getElementById("fdkdiv").remove();
    document.getElementsByTagName("em")[0].remove()
   
    if( globalQuestionDetails[k21].OptionanswerArray !== undefined &&   globalQuestionDetails[k21].OptionanswerArray.length > 0){
      for(var m20=0; m20 < globalQuestionDetails[k21].OptionanswerArray.length;m20++ ){
        document.getElementById(globalQuestionDetails[k21].OptionanswerArray[m20]).setAttribute("checked","true")
      }
  }
  }
  
  document.getElementsByName("chkQ2").forEach(x=>x.setAttribute("disabled","true"));
  
    TotalScore();
   }
   const TotalScore = ()=>{
    let sumScore = 0,summaxScore=0,totalPercent=0;;
    console.log(globalQuestionDetails)
     for(let n21 = 0; n21 < globalQuestionDetails.length;n21++){
       sumScore += globalQuestionDetails[n21].OptionScore;
       summaxScore +=  globalQuestionDetails[n21].OptionMaxScore;
     }
     settotalScore(sumScore);
     settotalmaxScore(summaxScore);
     totalPercent = ((sumScore)/summaxScore) * 100;
     settotalscorePercent(totalPercent);
   console.log("toalscore",sumScore)
   console.log("toalmaxscore",summaxScore)
   console.log("toalscore",totalPercent);
   
   }
   useEffect(()=>{
    generateResullHtml();
   
   },[])
  return (
    <> 
          <h2 style={{"textAlign": "left","padding": "10px"}}>Results</h2>
          <div className='totalScore'>Score: <strong>{totalscorePercent}</strong>%</div>
           <div className='summary' id="result-summary">
           
            </div> 
             
    </>
  )
}
