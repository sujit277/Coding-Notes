import React, { useState } from "react";

const Child = (props) => {
  const [childMessage, setChildMessage] = useState("Assam");

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{props.count}</h1>
        <h1>Child Component</h1>
        <button
          onClick={() => {
            props.alertMessage(childMessage);
          }}
        >
          Pass Data from Parent to Child
        </button>
        <button
          type="button"
          onClick={() => {
            setChildMessage("Jharkhand");
          }}
        >
          Change Message in Child
        </button>
      </div>
    </>
  );
};

export default Child;
