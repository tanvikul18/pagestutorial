import React, { use, useEffect, useState } from 'react'
import { useUserContext } from '../Context/ContextApi';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Result from './Result';
import QuestionRadioform from '../Components/QuestionRadioform';
export default function QuestionRadio() {
  let {pages,globalQuestionDetails,setglobalQuestionDetails,setNextDisabled,globalTRanscript,setglobalTRanscript,isDisabled,setDisabled,isChecked,setChecked,isPrev,setisPrev,rfdk,setRFdk,option,setOption,menuArray,setmenuArray} = useUserContext();
  
  const {id} = useParams();

  const[optionTxt,setoptionTxt]=useState(null);
  const[score,setScore]=useState(0);
  const[maxscore,setMaxscore]=useState(0);
  const[Questype,setQuestype]=useState(null); 
  const[quesTxt,setquesTxt]=useState(null);
  const[pgTitle,setPgTitle]=useState(null);
  const[OptionsData,setOptionsData]=useState([])
  const[shwFdk,setShwFdk]=useState(false);
  const[spanId,setspanId]=useState(null);
  const[isActive,setActive]=useState(true);

  const[getFdata,setFdata]=useState([]);

 // console.log(pages)
 


useEffect(()=>{
  const Details = Object.values(pages);  
   const filetredItems = Details.filter(x=>{
  return  x.PgId == id
 }) 
  setPgTitle(filetredItems[0].PgTitle)
  setquesTxt(filetredItems[0].quesTxt);
  setQuestype(filetredItems[0].PgType)
  setNextDisabled(true);
  setmenuArray([...menuArray,filetredItems[0].PgTitle])
  
   if(isPrev){
      setDisabled(true);
      setShwFdk(true)
      setRFdk(rfdk)
      setNextDisabled(false)
   } 
   console.log("OptionData",filetredItems[0].options)
   setOptionsData(filetredItems[0].options)
  
   setMaxscore(filetredItems[0].MaxScore)
   let transcriptDetails={
    QuesTitle : pgTitle,
    QuesTxt : quesTxt,
    QuesOption: '',
    Id: id,
    ScrType : "QuestionRadio"
  }
   setglobalTRanscript([...globalTRanscript,transcriptDetails])  
},[])



 // setNextDisabled(true);
  const handleSubmit=(e)=>{
    e.preventDefault();

    let QuesDetails = {
      OptionId: option,
      OptionScore: score,
      Optionfeedback: rfdk,
      QuesTitle: pgTitle,
      OptionMaxScore: maxscore,
      QuesText: quesTxt,
      Questype: Questype,  
      QuesOptions: OptionsData,
      isQuestionAttempted: true,
    };
   
    setglobalTRanscript((prevItems) => 
      prevItems.map((item) =>
        item.ScrType === "QuestionRadio"
          ? { ...item, QuesOption: optionTxt } // Correct update syntax
          : item
      )
    );
   
       
    setShwFdk(true);
    setDisabled(true);
    setNextDisabled(false);
    setActive(true);
   
    setglobalQuestionDetails([...globalQuestionDetails, QuesDetails]);
  }
  const handleRadioOption=(OptId,optTxt,ScoreOp,Fdk,e)=>{
 //   console.log("Details",OptId,ScoreOp,Fdk)
    const getSlectedId= e.target.id;
    const getspanSelected = getSlectedId+"_span";
  
   //  console.log("spanid",getspanSelected)
   setActive(false);
    setOption(OptId);
    setoptionTxt(optTxt)
    setScore(ScoreOp);
    setRFdk(Fdk);
  
    setspanId(getspanSelected)

   
    //setquesOptions(document.getElementById('option-group').innerHTML)
   
  }
  return (
    <div>
        <h2 style={{textAlign:"left",paddingLeft:"10px"}}>{ pgTitle}</h2>
        <div className='ques-Content' id="quesContent">
            <div className='questionTxt' id='questionTxt'>
              {quesTxt}
                <p><em> Select an option from the choices below and click <strong>Submit.</strong></em></p>
            </div>           
                {
                    <form onSubmit={handleSubmit} style={{"width":"60%"}}>
                     
                  <QuestionRadioform OptionData={OptionsData} isDisabled={isDisabled} selectedOption={option} handleRadioOption={handleRadioOption} />
                  <button className='btnSubmit' id="btnSubmit" disabled={isActive}>Submit</button>
                  </form>
                }
               {
                 <div className={`feedback ${shwFdk ? 'active': 'hidden'}`} id="fdkdiv">
                   
                          <p>{rfdk}</p>
                          <p><em>Click <strong>Next</strong> to continue.</em></p>
                    </div>
              }
            
        </div>
                      
           
    </div>
  )
}
