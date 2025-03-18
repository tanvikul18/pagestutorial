import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/ContextApi';
import { useParams ,useNavigate} from 'react-router-dom';
import Result from './Result';

export default function QuestionChecklist() {
  let {pages,setPages,QuesDetails,globalQuestionDetails} = useUserContext();
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
   // console.log(pages)
    const Details = Object.values(pages);
   
    const filetredItems = Details.filter(x=>{
      return  x.PgId == id
   })
    const getOptionDetails = filetredItems[0].options;
    
  //  console.log("GetOptionDetails",getOptionDetails)
    const {OptId1,OptId2,OptId3,OptId4,OptId5,NoOfOptions,ScoreOp1,ScoreOp2,ScoreOp3,crtOptions,Fdk1,Fdk2,Fdk3}= getOptionDetails;
    let Count = 0;
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
         
         document.getElementById("btnSubmitP").setAttribute("disabled","disabled");
         QuesDetails = {
                OptionanswerArray: answers,
                OptionScore: score,
                Optionfeedback: fdk,
                QuesTitle:pgTitle ,
                QuesText: quesTxt
         }
      
          setShwFdk(!shwFdk);
       
         globalQuestionDetails.push(QuesDetails);
         console.log("Ques 2 data",globalQuestionDetails)
        document.getElementById("btnNextP").disabled=false;
       document.getElementById("btnNextP").removeAttribute('disabled')
       document.getElementsByName("chkQ2").forEach(x=>x.setAttribute("disabled","true"));
      
    }
    const handlechkList=(OptId,e)=>{
     debugger;
      const getSlectedId= e.target.id;
      const getspanSelected = getSlectedId+"_span";
      setOptions(filetredItems[0].options.crtOptions)
    //  console.log("spanid",getspanSelected)
      Count++; 
      setanswers([...answers,OptId]);  
     
      if(options.indexOf(OptId)) {
        setcrtCount(crtCount => crtCount + 1)
      } 
      getScoreandFeedback(crtCount);
     
      setPgTitle(filetredItems[0].PgTitle);
     // setspanId(getspanSelected)
      setquesTxt(document.getElementById("questionTxt").innerText);
     // console.log("Count",Count)
      document.getElementById("btnSubmitP").removeAttribute("disabled");
    }
    return (
      <div>
          <h2 style={{textAlign:"left",paddingLeft:"10px"}}>{filetredItems[0].PgTitle}</h2>
          <div className='ques-Content'>
              <p className='questionTxt' id='questionTxt'>This is checklist question. 
                  <em>Select the applicable option from the choices below and click <strong>Submit.</strong></em>
              </p>           
                 <form onSubmit={handleSubmit} style={{"width":"60%"}}>
                   <div className='option-group'>
                     <input type="checkbox" id={OptId1} name="chkQ2" score={ScoreOp1} feedback={Fdk1} onChange={(e)=>handlechkList(OptId1,e)}/>
                     <span id={OptId1 + "_span"} >Option 1</span><br/>
                   
                     <input type="checkbox" id={OptId2} name="chkQ2" score={ScoreOp2} feedback={Fdk2} onChange={(e)=>handlechkList(OptId2,e)}/>
                     <span  id={OptId2+ "_span"}>Option 2</span><br/>
                    
                     <input type="checkbox" id={OptId3}  name="chkQ2" score={ScoreOp3} feedback={Fdk3} onChange={(e)=>handlechkList(OptId3,e)}/>
                     <span id={OptId3+ "_span"} >Option 3</span><br/>

                     <input type="checkbox" id={OptId4}  name="chkQ2" onChange={(e)=>handlechkList(OptId4,e)}/>
                     <span id={OptId3+ "_span"} >Option 4</span><br/>  
                    
                     <input type="checkbox" id={OptId5}  name="chkQ2" onChange={(e)=>handlechkList(OptId5,e)}/>
                     <span id={OptId3+ "_span"} >Option 5</span><br/>
                     </div>
                    
  
                     <button className='btnSubmit' id="btnSubmitP" disabled={Count == 0}>Submit</button>
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
