import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/ContextApi';
import { useParams ,useNavigate} from 'react-router-dom';
import Result from './Result';

export default function QuestionChecklist() {
 let {pages,globalQuestionDetails,setglobalQuestionDetails,setNextDisabled,globalTRanscript,setglobalTRanscript,isDisabled,setDisabled} = useUserContext();
  
  const nav = useNavigate();
  const {id} = useParams();
   const[crtCount,setcrtCount]=useState(0);
    const[score,setScore]=useState(0);
    const[fdk,setFdk]=useState(null);
    const[pgTitle,setPgTitle]=useState(null);
    const[quesTxt,setquesTxt]=useState('');  
    const[shwFdk,setShwFdk]=useState(false); 
    const[answers,setanswers]=useState([]);
    const[options,setOptions]=useState([]);
     const[ischkActive,setchkActive]=useState(true);
   // console.log(pages)
    const Details = Object.values(pages);
   
    const filetredItems = Details.filter(x=>{
      return  x.PgId == id
   })
   let transcriptDetails={
    QuesTitle : pgTitle,
    QuesTxt : quesTxt,
    ScrType : "QuestionChecklist"
  }
    const getOptionDetails = filetredItems[0].options;
    useEffect(()=>{
      setPgTitle(filetredItems[0].PgTitle)
      setquesTxt(filetredItems[0].quesTxt);
      setNextDisabled(true);
      setDisabled(false);
    },[])
  //  console.log("GetOptionDetails",getOptionDetails)
    const {OptId1,OptId2,OptId3,OptId4,OptId5,NoOfOptions,ScoreOp1,ScoreOp2,ScoreOp3,crtOptions,Fdk1,Fdk2,Fdk3}= getOptionDetails;
    useEffect(()=>{
     setglobalTRanscript([...globalTRanscript,transcriptDetails])
       },[pgTitle,quesTxt])
    const getScoreandFeedback=(crtCount)=>{
      debugger;
        if(crtCount == crtOptions.length){
          setScore(ScoreOp3);
          setFdk(Fdk3)
        }
      else if(crtCount == 2){
          setScore(ScoreOp2);
          setFdk(Fdk2)
        }
      else{
          setScore(ScoreOp1);
          setFdk(Fdk1)
        }
    }
  
    const handleSubmit=(e)=>{
         e.preventDefault();
         debugger;         
        let  QuesDetails = {
                OptionanswerArray: answers,
                OptionScore: score,
                Optionfeedback: fdk,
                QuesTitle:pgTitle ,
                QuesText: quesTxt
         }
      
          setShwFdk(!shwFdk);
          setchkActive(true);
          setDisabled(true);
          setNextDisabled(false);
          setglobalQuestionDetails([...globalQuestionDetails,QuesDetails])
    }
    const handlechkList=(OptId,e)=>{
     debugger;
      const getSlectedId= e.target.id;
      const getspanSelected = getSlectedId+"_span";
      setOptions(filetredItems[0].options.crtOptions)
    //  console.log("spanid",getspanSelected)
      
      setanswers([...answers,OptId]);  
     
      if(options.indexOf(OptId)) {
        setcrtCount(crtCount => crtCount + 1)
      } 
      getScoreandFeedback(crtCount);
      setchkActive(false);
     
      setPgTitle(filetredItems[0].PgTitle);
     // setspanId(getspanSelected)
      setquesTxt(document.getElementById("questionTxt").innerText);
     // console.log("Count",Count)
  
    }
    return (
      <div>
          <h2 style={{textAlign:"left",paddingLeft:"10px"}}>{filetredItems[0].PgTitle}</h2>
          <div className='ques-Content'>
              <div className='questionTxt' id='questionTxt'>
              {filetredItems[0].quesTxt}
                  <p><em>Select the applicable option from the choices below and click <strong>Submit.</strong></em></p>
              </div>           
                 <form onSubmit={handleSubmit} style={{"width":"60%"}}>
                   <div className='option-group'>
                     <input type="checkbox" id={OptId1} name="chkQ2"  disabled={isDisabled} onChange={(e)=>handlechkList(OptId1,e)}/>
                     <span id={OptId1 + "_span"} >Option 1</span><br/>
                   
                     <input type="checkbox" id={OptId2} name="chkQ2" disabled={isDisabled} onChange={(e)=>handlechkList(OptId2,e)}/>
                     <span  id={OptId2+ "_span"}>Option 2</span><br/>
                    
                     <input type="checkbox" id={OptId3}  name="chkQ2"  disabled={isDisabled} onChange={(e)=>handlechkList(OptId3,e)}/>
                     <span id={OptId3+ "_span"} >Option 3</span><br/>

                     <input type="checkbox" id={OptId4}  name="chkQ2" disabled={isDisabled} onChange={(e)=>handlechkList(OptId4,e)}/>
                     <span id={OptId3+ "_span"} >Option 4</span><br/>  
                    
                     <input type="checkbox" id={OptId5}  name="chkQ2" disabled={isDisabled} onChange={(e)=>handlechkList(OptId5,e)}/>
                     <span id={OptId3+ "_span"} >Option 5</span><br/>
                     </div>
                    
  
                     <button className='btnSubmit' id="btnSubmitP" disabled={ischkActive}>Submit</button>
                 </form>
                 {
                  <>
                   <div className={`feedback ${shwFdk ? 'active': 'hidden'}`}>
                     
                            <p>{fdk}</p>
                            <p><em>Click <strong>Next</strong> to continue.</em></p>
                      </div>
                     
                      </>
                }
          </div>
        
      </div>
    )
}
