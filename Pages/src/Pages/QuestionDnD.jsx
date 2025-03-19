import React, { useState, useEffect, useSyncExternalStore } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragItem from "./DragItem";
import DropZone from "./DropZone";
import { useUserContext } from "../Context/ContextApi";
import { useParams } from "react-router-dom";

export default function QuestionDnD() {
    let {
        pages,
        setPages,
        globalQuestionDetails,
        isNextDisabled,
        setNextDisabled,
        transcriptDetails,
        globalTRanscript,
        isDisabled,
        setDisabled
    } = useUserContext();
    const { id } = useParams();
    const details = Object.values(pages);
    const filteredItems = details.filter((x) => x.PgId == id);

    const [droppedItems, setDroppedItems] = useState({
        [filteredItems[0].options.dropId1]: [],
        [filteredItems[0].options.dropId2]: []
    });
    const[dndscore,setdndsore]=useState(0);
    const[dndfdk,setdndfdk]=useState(null);
    const[isFdkShow,setFdkShow]=useState(false);
   let count =0;
    const {
        dragId1,
        dragId2,
        dragId3,
        dragId4,
        dropId1,
        dropId2,
        drop1CrtAsnwer,
        drop2CrtAsnwer,
        NoOfdragsallowed,
        NoOfDrags,
        NoOfDrops,
        CrtScore,
        IncrtScore,
        FdkCrt,
        FdkIncrt
    } = filteredItems[0].options;
   const handleSubmit=(e)=>{
    e.preventDefault();
     if(drop1CrtAsnwer.indexOf())
    for(let i =0 ; i<drop1CrtAsnwer.length;i++){
    debugger;
        if(drop1CrtAsnwer[i] == droppedItems[filteredItems[0].options.dropId1][i].name){
            count++;
        }
    }
    for(let j =0 ; j<drop2CrtAsnwer.length;j++){
        if(drop2CrtAsnwer[j] == droppedItems[filteredItems[0].options.dropId2][j].name){
            count++;
        }
    }
    console.log("count",count)
     if(count == 4){
        setdndfdk(FdkCrt)
        setdndsore(CrtScore)
        setFdkShow(true)
     }
     else{
        setdndfdk(FdkIncrt)
        setdndsore(IncrtScore)
        setFdkShow(true)
     }
     setDisabled(true)
     setNextDisabled(false);
    console.log("Drop1 Items",droppedItems[filteredItems[0].options.dropId1])
    console.log("Drop2 Items",droppedItems[filteredItems[0].options.dropId2])
   }



    useEffect(() => {
        setDisabled(true);
        setNextDisabled(true);
    }, []);

    const handleDrop = (item, dropZoneId) => {
        setDroppedItems((prev) => {
            if (prev[dropZoneId].length < NoOfdragsallowed) {
                return {
                    ...prev,
                    [dropZoneId]: [...prev[dropZoneId], item]
                };
            }
          
            return prev; // Do nothing if limit reached
        });
        setDisabled(false)
    };

    const handleRemoveItem = (dropZoneId, index) => {
        setDroppedItems((prev) => ({
            ...prev,
            [dropZoneId]: prev[dropZoneId].filter((_, i) => i !== index)
        }));
    };

    return (
        <div>
            <h2 style={{ textAlign: "left", paddingLeft: "10px" }}>
                {filteredItems[0].PgTitle}
            </h2>
            <DndProvider backend={HTML5Backend}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        marginTop:"86px"
                    }}
                >
                    <div
                        style={{
                            border: "1px solid #ccc",
                            padding: "20px",
                            borderRadius: "5px"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around"
                            }}
                        >
                            {/* Drag Items Section */}
                            <div
                                style={{
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    borderRadius: "5px"
                                }}
                            >
                                <h2>Drag Items</h2>
                                <DragItem name="Item 1" id={String(dragId1)} />
                                <DragItem name="Item 2" id={String(dragId2)} />
                                <DragItem name="Item 3" id={String(dragId3)} />
                                <DragItem name="Item 4" id={String(dragId4)} />
                            </div>

                            {/* Drop Zones Section */}
                            {[dropId1, dropId2].map((dropZoneId) => (
                                <div
                                    key={dropZoneId}
                                    style={{
                                        border: "1px solid #ccc",
                                        padding: "10px",
                                        borderRadius: "5px"
                                    }}
                                >
                                    <h2>Drop Zone {dropZoneId}</h2>
                                    <DropZone
                                        onDrop={(item) => handleDrop(item, dropZoneId)}
                                        id={dropZoneId}
                                        targtesllowed={NoOfdragsallowed}
                                        
                                    />
                                    {droppedItems[dropZoneId].map((item, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                border: "1px solid #ccc",
                                                padding: "10px",
                                                borderRadius: "5px",
                                                marginTop: "10px",
                                                backgroundColor: "lightblue",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }}
                                        >
                                            <p>{item.name}</p>
                                            <button onClick={() => handleRemoveItem(dropZoneId, index)}>
                                                close
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="btnSubmitDnd" disabled={isDisabled} onClick={handleSubmit}>
                    Submit
                </button>
                <div className="feedack">
                   {
                     isFdkShow ? <p>{dndfdk}</p> : null
                   }
                </div>
            </DndProvider>
        </div>
    );
}
