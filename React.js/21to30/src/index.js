// Calculator App

/* import React from "react";
import ReactDOM from "react-dom";
import {add,sub,mul,div} from "./Cal";

ReactDOM.render(
<>
<ul>
  <li><h1>The Sum of Numbers is {add(40,2)}</h1></li>
  <li><h1>The Substraction of Numbers is {sub(40,2)}</h1></li>
  <li><h1>The Division of Numbers is {div(40,2)}</h1></li>
  <li><h1>The Multiplication of Numbers is {mul(40,2)}</h1></li>
</ul>
</>,document.getElementById("root"),()=> console.log("Server Started")); */

import React from "react";
import ReactDOM from "react-dom";

function Sujit() {
  return <h1>Hello Sujit</h1>
}

ReactDOM.render(
  <>
    <Sujit></Sujit>
  </>, document.getElementById("root"), () => console.log("Server Started"));