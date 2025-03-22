import React from 'react'

export default function QuestionChecklistform({answers,optionData,isDisabled,handlechkList}) {
 
  return (
   
                   <div className='option-group'>
                    {
                        optionData.map((item,index)=>{
                               return <>
                                <input type="checkbox" id={item.OptionId} name="chkQ2" checked={answers.includes(item.OptionId)}  disabled={isDisabled}  onChange={(e)=>handlechkList(item.OptionId,e)}/>
                     <span id={item.OptionId + "_span"} >{item.OptionTxt}</span><br/>
                   
                               </>
                        })
                  }
                    
                    
                     </div>
                    
  
                   
  )
}
