import React, { useEffect, useState } from "react";
import { useUserContext } from "../Context/ContextApi";
import { useNavigate, useParams } from "react-router-dom";

export default function Menu() {
  const { id } = useParams();
  const navigate=useNavigate();
 
  const {pages, setmenuDisabled,menuArray,setmenuArray} = useUserContext();
  // console.log("Menu",menuArray)
  

  return (
    <div className="menudiv">
      <ul className="menulist">
        {
               menuArray.map((item,index)=>{
                return <li className="menu-item" id={index}><a href="" dataid={index+1} className="menu-link">{item}</a></li>
               })
          }
      </ul>
      </div>
  );
}
