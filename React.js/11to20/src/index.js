import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Name = "Sujit Kumar Verma";
const Company = "EPAM";

/* Using Javscript expressions in JSX elements */
// ReactDOM.render(
//   <>
//     <h1 style={{textAlign:"center"}}> My Name is {Name}</h1>
//   </>,
//   document.getElementById("root")
// );

/* Template Literals (`${}`) Using Template Literals in JSX elements */

// const textStyle = {
//   textAlign: "center",
// };

// ReactDOM.render(
//   <>
//     {/* <h1 style={{ textAlign: "center" }}>
//       My Name is {`${Name} And Company is ${Company}`}
//     </h1> */}
//     {/*  <h1 style={textStyle}>My Name is {`${Name} And Company is ${Company}`}</h1> */}
//     <h1 className="textStyle">
//       My Name is {`${Name} And Company is ${Company}`}
//     </h1>
//   </>,
//   document.getElementById("root")
// );

/* Showing Greeting message based on timing */

let greeting = "";
let greetingStyle = {};
let hours = new Date().getHours();

if (hours >= 1 && hours <= 11) {
  greeting = "Good Morning";
  greetingStyle.color = "green";
} else if (hours >= 12 && hours <= 17) {
  greeting = "Good Afternoon";
  greetingStyle.color = "yellow";
} else {
  greeting = "Good Night";
  greetingStyle.color = "black";
}

ReactDOM.render(
  <>
    <h1 style={{ textAlign: "center" }}>
      Hello Sujit <span style={greetingStyle}>{greeting}</span>
    </h1>
  </>,
  document.getElementById("root")
);
