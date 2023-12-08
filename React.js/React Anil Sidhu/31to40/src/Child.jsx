import React, { useState } from "react";

// Passing data from child to parent
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
          Pass Data from Child to Parent
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
