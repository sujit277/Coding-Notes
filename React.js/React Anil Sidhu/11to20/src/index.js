import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import Function from './Function';
//import Class from './Class';
//import FunctionProps from './FunctionProps';
//import ClassProps from './ClassProps';
//import ConditionalRendering from './ConditionalRendering';
import Form from "./Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*   <Function /> */}
    {/* <Class /> */}
    {/* <FunctionProps /> */}
    {/*  <ClassProps /> */}
    {/* <ConditionalRendering/> */}
    <Form />
  </React.StrictMode>
);
