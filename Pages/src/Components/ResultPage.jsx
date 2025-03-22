import React from 'react'
import { useUserContext } from '../Context/ContextApi'
import QuestionRadioform from '../Components/QuestionRadioform';
import QuestionChecklistform from '../Components/QuestionChecklistform';
import { useParams } from 'react-router-dom';
import Cloze from '../Pages/Cloze';
import DropDown from './DropDown';
import Input from './Input';
export default function ResultPage() {
      let {pages,globalQuestionDetails,is1Checked,is2Checked,is3Checked}= useUserContext();
     let isOption1=false,isOption2=false,isOption3=false,isDisabled=true;
  return (
    <div>{
           globalQuestionDetails.map((item,index)=>{
              return(
                <div className='questionDetails'>
                    <div  className='que-header' id="QuesTxt">
                        <h3>{item.QuesTitle}</h3>
                        <span className='pointcontainer'>Points {item.OptionScore} out of {item.OptionMaxScore}</span>
                     </div>   
                    <div className='que-data'>
                            <p>{item.QuesText}</p>
                            <div className='option-group'>
                                {
                                    item.Questype === "QuestionRadio" ? <QuestionRadioform OptionData={item.QuesOptions} isDisabled={isDisabled} selectedOption={item.OptionId}  /> : item.Questype == "Cloze" ? <><DropDown Value={item.DropDownValue}  isdrpdisabled={item.isdrpdisabled}/><Input num={item.InputValue} isinputdisabled={item.isinputdisabled}/></> : <QuestionChecklistform answers={item.OptionanswerArray} optionData={item.QuesOptions} isDisabled={isDisabled}/>
                                }
                            
                            </div>
                    </div>
                    <div className="ques-feedback">
                                {item.Optionfeedback}
                    </div>                
                </div>
 
              )
       
           })
        
        
        }</div>
  )
}
