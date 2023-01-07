import React, { useState } from "react";


const Function = () => {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Functional Component with State</h1>
        <h1>{count}</h1>
        <button type="button" onClick={increment}>Increment</button>
      </div>

    </>
  );
}

export default Function;