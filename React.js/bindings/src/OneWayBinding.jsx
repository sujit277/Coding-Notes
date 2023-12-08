import React, { useState } from "react";

const Child = ({ name }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{name}</h1>
    </div>
  );
};

const OneWayBinding = () => {
  const [name, setName] = useState("Sujit Kumar Verma");

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>One Way Binding</h1>
      <h1 style={{ color: "green" }}>Using Props</h1>
      <Child name={name} />
      <h1 style={{ color: "green" }}>Using States</h1>
      <h1>{name}</h1>
      <button type="button" onClick={() => setName("Sherlock Holmes")}>
        Update
      </button>
    </div>
  );
};

export default OneWayBinding;
