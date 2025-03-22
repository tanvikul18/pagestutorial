import React from 'react'

export default function Input({num,isinputdisabled,handleNumber}) {
  return (
    <div style={{display:"inline-block"}}>then enter the valeu in <input type="number" id="iTxt" name="inpTxt" value={num} disabled={isinputdisabled} onChange={handleNumber}/> input box. </div>
  )
}
