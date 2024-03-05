import React from "react";
import useComH from "./useComH";

const ComF = () => {
  const [count, increment] = useComH(5);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter increment on Click</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Button Click</button>
    </div>
  );
};

export default ComF;
