import React, { useState } from "react";

// Passing data from child to parent
const Child = (props) => {

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{props.count}</h1>
        <h1>Child Component</h1>
        <button
          onClick={() => {
            props.alertMessage("Edward");
          }}
        >
          Pass Data from Child to Parent
        </button>
      </div>
    </>
  );
};

export default Child;
