// var React = require("react");
// var ReactDOM = require("react-dom");

//Normal way of serving HTML content in React

import React from "react";
import ReactDOM from "react-dom";
//ReactDOM.render(<h1>Hi This is Sujit Kumar Verma</h1>,document.getElementById("root"),()=>console.log("Server Started"));

//Pure Javascript

// var h1 = document.createElement("h1");
// h1.innerHTML = "Sujit Kumar Verma";
// document.getElementById("root").appendChild(h1);

// Code for multiple elements sending in Reactjs
ReactDOM.render(
  <React.Fragment>
    <div style={{ textAlign: "center" }}>
      <h1>Sujit Kumar Verma</h1>
      <h1>DLT</h1>
      <h1>Accenture</h1>
      <h1>EPAM Systems</h1>
    </div>
  </React.Fragment>,
  document.getElementById("root")
);

// For React 16. Above version we can pass multiple elements as array
// ReactDOM.render(
//   [<h1>Sujit Kumar Verma</h1>, <h1>DLT</h1>, <h1>Accenture</h1>, <h1>EPAM</h1>],
//   document.getElementById("root")
// );
