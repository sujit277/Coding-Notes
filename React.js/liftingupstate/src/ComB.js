import React from "react";

const ComB = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={props.handleClick}>Click Counter</button>
    </div>
  );
};

export default ComB;
