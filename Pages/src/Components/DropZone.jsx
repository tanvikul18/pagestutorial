import React from "react";
import { useDrop } from "react-dnd";

const DropZone = ({ onDrop, id, targtesllowed }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "item", // Ensure this matches the DragItem type
        drop: (item) => onDrop(item, id), // Pass dropZone ID
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            style={{
                border: `2px dashed ${isOver ? "green" : "black"}`,
                padding: "20px",
                minHeight: "50px",
                textAlign: "center",
                backgroundColor: isOver ? "#e0ffe0" : "#f9f9f9",
                borderRadius: "5px",
            }}
        >
            <p>Drop here (Max: {targtesllowed})</p>
        </div>
    );
};

export default DropZone;
