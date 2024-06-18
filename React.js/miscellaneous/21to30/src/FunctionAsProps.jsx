import React, { useState } from "react";
import ComA from "./ComA";

const FunctionAsProps = () => {
  const [name, setName] = useState("Sujit Kumar Verma");

  function alertMessage() {
    alert(`${name} is Awesome`);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Passing Function as a Props</h1>
        <button
          type="button"
          onClick={() => {
            setName("Elon Musk");
          }}
        >
          ChangeName
        </button>
        <ComA alertMessage={alertMessage} />
      </div>
    </>
  );
};

export default FunctionAsProps;
