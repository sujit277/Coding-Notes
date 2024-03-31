import React from "react";

const ComB = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{props.count}</h1>
      <button onClick={props.handleClick}>Click Counter</button>
    </div>
  );
};

export default ComB;
