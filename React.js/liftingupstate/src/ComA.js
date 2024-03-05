import React from "react";

const ComA = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter on Buttonclick</h1>
      <h1>{props.count}</h1>
    </div>
  );
};

export default ComA;
