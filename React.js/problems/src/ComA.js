import React, { useState } from "react";

const ComA = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter increment on Click</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Button Click</button>
    </div>
  );
};

export default ComA;
