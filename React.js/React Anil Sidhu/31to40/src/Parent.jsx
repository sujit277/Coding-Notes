import React, { useState } from "react";
import Child from "./Child";

// Passing data from parent to child
const Parent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Himachal Pradesh");

  function increment() {
    setCount(count + 1);
  }

  function alertMessage(message) {
    alert(`${message}`);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Parent Component</h1>
        <button type="button" onClick={increment}>
          Increment
        </button>
        <button
          type="button"
          onClick={() => {
            alertMessage(message);
          }}
        >
          GiveAlertMessage
        </button>
        <button
          type="button"
          onClick={() => {
            setMessage("Karnataka");
          }}
        >
          Change Message in Parent
        </button>
        <Child alertMessage={alertMessage} count={count} />
      </div>
    </>
  );
};

export default Parent;