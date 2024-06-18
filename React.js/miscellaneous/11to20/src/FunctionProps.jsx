import React, { useState } from "react";
import ComA from "./ComA";

// Functional Component with props
const FunctionProps = () => {
  const [name, setName] = useState("Sujit Kumar Verma");

  function changeName() {
    setName("Elon Musk");
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Functional Component with Props</h1>
        <ComA name={name}></ComA>
        <button type="button" onClick={changeName}>
          ChangeName
        </button>
      </div>
    </>
  );
};

export default FunctionProps;
