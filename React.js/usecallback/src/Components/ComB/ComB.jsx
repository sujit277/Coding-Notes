import React from "react";

const ComB = ({ onClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click Me</button>;
};

export default React.memo(ComB);
