import React, { useState } from "react";

const useComH = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }
  return [count, increment];
};

export default useComH;
