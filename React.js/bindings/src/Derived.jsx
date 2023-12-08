import React, { useState } from "react";

const Derived = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function changeHandler(event) {
    setName(event.target.value);
    if (name === "Name") {
      setText("Sujit Kumar Verma");
    } else if (name === "Company") {
      setText("EPAM");
    } else if (name === "CTC") {
      setText("12.5 LPA Per Annum");
    } else {
      setText("Bangalore");
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dervied/Computed State</h1>
      <input
        type="text"
        name={name}
        placeholder="Enter Your Name"
        onChange={(event) => changeHandler(event)}
      ></input>
      <h1>{text}</h1>
    </div>
  );
};

export default Derived;
