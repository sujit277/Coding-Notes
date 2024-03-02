import React from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{props.name}</h3>
      <h1>Counter Increment with ClickCounter</h1>
      <h1>{props.count}</h1>
      <button onClick={props.increment}>ClickCounter</button>
    </div>
  );
};

export default withCounter(ClickCounter);
