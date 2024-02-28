import React, { useCallback } from "react";
import ComB from "../ComB/ComB";
import { useState } from "react";

const ComA = () => {
  const [count, setCount] = useState(0);

  // Define the callback function using useCallback
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
    setCount(prevCount => prevCount + 1);
  }, [count]);

  console.log("ParentComponent rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <ComB onClick={handleClick} />
    </div>
  );
};

export default ComA;