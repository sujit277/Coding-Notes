import React from "react";
import withCounter from "./withCounter";

const HoverCounter = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{props.name}</h3>
      <h1>Counter Increment with HoverCounter</h1>
      <h1>{props.count}</h1>
      <button onMouseOver={props.increment}>HoverCounter</button>
    </div>
  );
};

export default withCounter(HoverCounter);
