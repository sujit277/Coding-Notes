import React from "react";
import useComH from "./useComH";

const ComG = () => {
  const [count, increment] = useComH(5);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter increment on mouseenter</h1>
      <h1>{count}</h1>
      <button onMouseEnter={increment}>MouseEnter</button>
    </div>
  );
};

export default ComG;
