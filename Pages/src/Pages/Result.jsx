import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/ContextApi';
export default function Result(props) {
    let {pages,globalQuestionDetails,setglobalQuestionDetails,setNextDisabled,globalTRanscript,setglobalTRanscript,isDisabled,setDisabled} = useUserContext();
      const[totalScore,settotalScore]= useState(0);
  const[totalmaxScore,settotalmaxScore]= useState(0);
  const[totalscorePercent,settotalscorePercent]= useState(0);
  const[resultHtml,setresultHtml]=useState('');
 
   const generateResullHtml=()=>{
    let _resultHtml = '';
   
    for(let n21 = 0; n21 < globalQuestionDetails.length;n21++){
      _resultHtml += `<div className='questionDetails'><div className='que-header' id="QuesTxt"><h3>${globalQuestionDetails[n21].QuesTitle}</h3><span>Points ${globalQuestionDetails[n21].OptionScore} out of ${globalQuestionDetails[n21].OptionMaxScore}</span></div><div className='que-data'>${globalQuestionDetails[n21].QuesText}<div class='option-group'>${globalQuestionDetails[n21].QuesOptions}</div></div><div className='ques-feedback'>${globalQuestionDetails[n21].Optionfeedback}</div></div>`;
     
    }
    setresultHtml(_resultHtml);
    //TotalScore();
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
           <div className='summary' id="result-summary" dangerouslySetInnerHTML={{__html:resultHtml}}>
               
            </div> 
             
    </>
  )
}
