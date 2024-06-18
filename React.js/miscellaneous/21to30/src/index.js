import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import FunctionAsProps from './FunctionAsProps';
//import ConstructorandRender from './ConstructorandRender';
// import LifeCycle from "./LifeCycle";
import UseEffectHook from "./UseEffect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <FunctionAsProps/> */}
    {/* <ConstructorandRender />  */}
    {/*   <LifeCycle/> */}
    <UseEffectHook />
  </React.StrictMode>
);
