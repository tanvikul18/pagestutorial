import React, { useState } from 'react'

export default function QuestionRadioform({OptionData,isDisabled,selectedOption,handleRadioOption}) {
   console.log("value",OptionData)
    return (
  
    <div className='option-group' id="option-group">
      {
        OptionData.map((item,index)=>{
          return <>
                    <input type="radio" id={item.OptionId} score={item.Score} feedback={item.Feedback} name="radioQ1" disabled={isDisabled} checked={selectedOption === item.OptionId} onChange={(e)=>handleRadioOption(item.OptionId,item.OptionTxt,item.Score,item.Feedback,e)}/>
                    <span id={item.OptionId +"_span"}>{item.OptionTxt}</span><br/>
                    </>
        })
      }
  
    </div>
    

  )
}
