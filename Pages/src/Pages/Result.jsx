import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/ContextApi';
import ResultPage from '../Components/ResultPage';
import { useNavigate } from 'react-router-dom';
export default function Result(props) {
    let {pages,globalQuestionDetails,setglobalQuestionDetails,setNextDisabled,globalTRanscript,setglobalTRanscript,isDisabled,setDisabled,menuArray,setmenuArray} = useUserContext();
      const[totalScore,settotalScore]= useState(0);
  const[totalmaxScore,settotalmaxScore]= useState(0);
  const[totalscorePercent,settotalscorePercent]= useState(0);
  const[resultHtml,setresultHtml]=useState('');
  const navigate=useNavigate();
  const handleRetry=(e)=>{
        e.preventDefault();
        globalQuestionDetails= [];
        globalTRanscript=[];
        navigate('/page/1')
  }
 
   const TotalScore = ()=>{
    let sumScore = 0,summaxScore=0,totalPercent=0;;
    console.log("clozequestionDeatils",globalQuestionDetails)
     for(let n21 = 0; n21 < globalQuestionDetails.length;n21++){
       sumScore += globalQuestionDetails[n21].OptionScore;
       summaxScore +=  globalQuestionDetails[n21].OptionMaxScore;
     }
     settotalScore(sumScore);
     settotalmaxScore(summaxScore);
     totalPercent = ((sumScore)/summaxScore) * 100;
     settotalscorePercent(totalPercent.toFixed(0));
 
   
   }
   useEffect(()=>{
    TotalScore();   
    setmenuArray([...menuArray,"Results"])
   },[])
  return (
    <> 
          <h2 style={{"textAlign": "left","padding": "10px"}}>Results</h2>
          <div className='totalScore'>Score: <strong>{totalscorePercent}</strong>%</div>
         <button className='btnRetry' onClick={handleRetry}>Retry</button>
           <div className='summary' id="result-summary">
                <ResultPage/>
            </div> 
             
    </>
  )
}
