import React, { useState } from "react";

// Statefull component in React
const Statefull = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Statefull Component</h1>
        <h1>{count}</h1>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default Statefull;
