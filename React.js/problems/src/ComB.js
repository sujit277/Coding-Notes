import { React, useState } from "react";

const ComB = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter increment on mouseenter</h1>
      <h1>{count}</h1>
      <button onMouseEnter={increment}>MouseEnter</button>
    </div>
  );
};

export default ComB;
