import React, { useState } from "react";

const Derived = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  // useEffect to update doubleCount whenever count changes
  useEffect(() => {
    setDoubleCount(count * 2);
  }, [count]); // Dependency array ensures this effect only runs when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default Derived;
