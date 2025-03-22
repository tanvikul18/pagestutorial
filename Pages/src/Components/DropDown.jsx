import React from 'react'

export default function DropDown({Value,handleDropdown,isdrpdisabled}) {
  return (
    <div>This is a <select id="drpEx" value={Value} onChange={handleDropdown} disabled={isdrpdisabled}>
                        
    <option value='General'>General</option>
    <option value='Motor'>Motor</option>
    <option value='Sample'>Sample</option>
   </select> select one value and</div>
  )
}
