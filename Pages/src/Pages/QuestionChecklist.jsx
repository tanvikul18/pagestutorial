import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/ContextApi';
import { useParams ,useNavigate} from 'react-router-dom';
import Result from './Result';
import QuestionChecklistform from '../Components/QuestionChecklistform';

export default function QuestionChecklist() {
 let {pages,globalQuestionDetails,setglobalQuestionDetails,setNextDisabled,globalTRanscript,setglobalTRanscript,isPrev,setisPrev,isDisabled,setDisabled,cfdk,setCFdk,answers,setanswers,menuArray,setmenuArray} = useUserContext();
  
  const nav = useNavigate();
  const {id} = useParams();
   const[crtCount,setcrtCount]=useState(0);
    const[score,setScore]=useState(0);   
    const[maxscore,setMaxscore]=useState(0);
    const[pgTitle,setPgTitle]=useState(null);
    const[quesTxt,setquesTxt]=useState('');  
    const[shwFdk,setShwFdk]=useState(false); 
    
     const[ischkActive,setchkActive]=useState(true);
     const[QuesData,setQuesData]=useState([]);
     const[crtOptions,setCrtOptions]=useState([]);//correct asnwerchecboxes
     const[optionsData,setoptionsData] = useState([])
   // console.log(pages)
   
    useEffect(()=>{
      const Details = Object.values(pages);
   
      const filetredItems = Details.filter(x=>{
        return  x.PgId == id
     })
     let transcriptDetails={
      QuesTitle : pgTitle,
      QuesTxt : quesTxt,
      QuesOption:[],
      ScrType : "QuestionChecklist"
    }
  
     setoptionsData(filetredItems[0].options)
     setQuesData(filetredItems[0])
      setPgTitle(filetredItems[0].PgTitle)
      setquesTxt(filetredItems[0].quesTxt);
      setMaxscore(filetredItems[0].MaxScore)
      setmenuArray([...menuArray,filetredItems[0].PgTitle])
      setNextDisabled(true);
      setDisabled(false);
      if(isPrev){
        setDisabled(true);
        setShwFdk(true)
        setCFdk(cfdk)
        setNextDisabled(false)
     }
     setglobalTRanscript([...globalTRanscript,transcriptDetails]) 
    },[])
 
   

 // const {OptId1,OptId2,OptId3,OptId4,OptId5,NoOfOptions,ScoreOp1,ScoreOp2,ScoreOp3,crtOptions,Fdk1,Fdk2,Fdk3}= getOptionDetails;

    const getScoreandFeedback=(crtCount)=>{
      debugger;
      console.log("QuesData",QuesData)
        if(crtCount == crtOptions.length){
          
          setScore(QuesData.Score[0]);
          setCFdk(QuesData.Feedbacks[0])
        }
      else if(crtCount == 2){
        setScore(QuesData.Score[1]);
        setCFdk(QuesData.Feedbacks[1])
        }
      else{
        setScore(QuesData.Score[2]);
        setCFdk(QuesData.Feedbacks[2])
        }
    }
  
    const handleSubmit=(e)=>{
         e.preventDefault();
         debugger;         
        let  QuesDetails = {
                OptionanswerArray: answers,
                OptionScore: score,
                Optionfeedback: cfdk,
                QuesTitle:pgTitle ,
                QuesOptions: optionsData,
                OptionMaxScore: maxscore,                
                QuesText: quesTxt
         }
       
         setglobalTRanscript((prevItems) =>
          prevItems.map((item) => {
            if (item.ScrType === "QuestionChecklist") {
              return {
                ...item, 
                QuesOption: [...(item.QuesOption || []), ...answers], 
              };
            }
            return item; 
          })
        );
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
      //setOptions(filetredItems[0].options.crtOptions)
      setCrtOptions(QuesData.crtOptions);
    //  console.log("spanid",getspanSelected)
      
      setanswers([...answers,OptId]);  
   
      if(crtOptions.indexOf(OptId)) {
        setcrtCount(crtCount => crtCount + 1)
      } 
      getScoreandFeedback(crtCount);
      setchkActive(false);
 
  
    }
    return (
      <div>
          <h2 style={{textAlign:"left",paddingLeft:"10px"}}>{pgTitle}</h2>
          <div className='ques-Content'>
              <div className='questionTxt' id='questionTxt'>
              {quesTxt}
                  <p><em>Select the applicable option from the choices below and click <strong>Submit.</strong></em></p>
              </div>           
                  {
                     <form onSubmit={handleSubmit} style={{"width":"60%"}}>
                    <QuestionChecklistform answers={answers} optionData={optionsData} isDisabled={isDisabled}  handlechkList={handlechkList}/>
                    <button className='btnSubmit' id="btnSubmitP" disabled={ischkActive}>Submit</button>
                    </form>
                 }
                 {
                  <>
                   <div className={`feedback ${shwFdk ? 'active': 'hidden'}`}>
                     
                            <p>{cfdk}</p>
                            <p><em>Click <strong>Next</strong> to continue.</em></p>
                      </div>
                     
                      </>
                }
          </div>
        
      </div>
    )
}
