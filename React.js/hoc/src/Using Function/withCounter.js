import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);

    function increment() {
      setCount(count + 1);
    }
    return (
      <WrappedComponent count={count} increment={increment} {...props} />
    );
  };
  return NewComponent;
};

export default withCounter;
