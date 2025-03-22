import React, { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null); // Default: no section open

  const handleToggle = (index) => {
    // Toggle the active section; close if the same section is clicked again
    setActiveIndex(activeIndex === index ? null : index);
   
  };

  return (
    <div>
      <h2>Accordion Sample</h2>
      <div className="accordion-container">

        {/* First Section */}
        <div className="accordion-section">
          <div className="section-header">
            <p className="acc-header">Teach Me:</p>
            <button className="btntoggle" onClick={() => handleToggle(1)}>
              {activeIndex === 1 ? "Close" : "Open"}
            </button>
          </div>
          {activeIndex === 1 && (
            <div className="section-body">
              <p>This section covers various topics in a structured format...</p>
            </div>
          )}
        </div>

        {/* Second Section */}
        <div className="accordion-section">
          <div className="section-header">
            <p className="acc-header">Study Me:</p>
            <button className="btntoggle" onClick={() => handleToggle(2)}>
              {activeIndex === 2 ? "Close" : "Open"}
            </button>
          </div>
          {activeIndex === 2 && (
            <div className="section-body">
              <p>Contrary to popular belief, Lorem Ipsum is not random text...</p>
            </div>
          )}
        </div>

        {/* Third Section */}
        <div className="accordion-section">
          <div className="section-header">
            <p className="acc-header">Quiz Me:</p>
            <button className="btntoggle" onClick={() => handleToggle(3)}>
              {activeIndex === 3 ? "Close" : "Open"}
            </button>
          </div>
          {activeIndex === 3 && (
            <div className="section-body">
              <p>The standard chunk of Lorem Ipsum used since the 1500s...</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
