import React, { useState } from "react";

// Conditional Rendering 
const ConditionalRendering = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Conditional Rendering</h1>
        <h2>Using ternary operator</h2>
        {visible ? <h1>Sujit Kumar Verma</h1> : <h1>Elon Musk</h1>}
        <h2>Using inline if and logical && operator</h2>
        {visible && <h1>Sujit Kumar Verma</h1>}
        <button
          type="button"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          ChangeName
        </button>
      </div>
    </>
  );
};

export default ConditionalRendering;
