import React, { useState } from "react";

// Controlled Component
const Controlled = () => {
  const [name, setName] = useState("Sujit Kumar Verma");

  function setNameOnChange(name) {
    setName(name);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Controlled Component</h1>
        <h1>{name}</h1>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => {
            setNameOnChange(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Controlled;
