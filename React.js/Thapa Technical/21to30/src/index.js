import React from "react";
import ReactDOM from "react-dom";
import { add, sub, mul, div } from "./Cal";

// Calculator
ReactDOM.render(
  <div style={{ textAlign: "center" }}>
    <ul>
      <li>
        <h1>The Sum of Numbers is {add(40, 2)}</h1>
      </li>
      <li>
        <h1>The Substraction of Numbers is {sub(40, 2)}</h1>
      </li>
      <li>
        <h1>The Division of Numbers is {div(40, 2)}</h1>
      </li>
      <li>
        <h1>The Multiplication of Numbers is {mul(40, 2)}</h1>
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
