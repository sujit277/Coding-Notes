import React, { useState } from "react";

// Sibling Communication
const Sibling = (props) => {
  const [name, setName] = useState("");

  function inputHandler(event) {
    setName(event.target.value);
  }

  return (
    <div style={{ textAlign: "center", color: "yellow" }}>
      <h1>Sibling Component</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        onChange={(event) => inputHandler(event)}
      ></input>
      <button type="button" onClick={() => props.updateData(name)}>
        Submit
      </button>
    </div>
  );
};

export default Sibling;
