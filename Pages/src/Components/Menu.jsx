import React, { useEffect, useState } from "react";
import { useUserContext } from "../Context/ContextApi";
import { useParams } from "react-router-dom";

export default function Menu() {
  const { id } = useParams();
  const { pages, setmenuDisabled } = useUserContext();
  
  // State to track disabled menu items
  const [disabledItems, setDisabledItems] = useState({});
  const[getPageIds,setPageIds]=useState([]);
  useEffect(() => {
    // Get all menu items
    const menuItems = Array.from(document.getElementsByClassName("menuitem"));

    // Create an object to track which items should be disabled
    const disabledState = {};
    menuItems.forEach((item) => {
      console.log("getPageIds",PageIds)
      if(PageIds.indexOf(item.id) < 0)
            disabledState[item.id] = true; // Initially disable all
    });

    // Enable only the selected item
    if (id && disabledState[id] !== undefined) {
      debugger;
      disabledState[id] = false;
      PageIds.push(id)
    }

    setDisabledItems(disabledState);
  }, [id]);

  return (
    <div className="menudiv">
      <ul className="menulist">
        {["2", "3", "4", "5"].map((menuId) => (
          <li
            key={menuId}
            className={`menuitem ${disabledItems[menuId] ? "disabled" : ""}`}
            id={menuId}
          >
            {
            menuId == 5 ? <a href="#">Results</a> : <a href="#">Decision Point: Question {parseInt(menuId)-1}</a>   
            } 
          </li>
        ))}
      </ul>
    </div>
  );
}
