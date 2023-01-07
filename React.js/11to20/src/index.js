import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
/* Importing Index.css file in Index.js External CSS */
import "./index.css";

/* Using Javscript expressions in jsx elements */

/* const Name = "Sujit Kumar Verma";
const Company = "EPAM";
ReactDOM.render(<>
<h1> My Name is {Name}</h1>
</>,document.getElementById("root"),()=>console.log("Server Started")); */


/* Template Literals (`${}`) Using Template Literals in jsx elements */

/* ReactDOM.render(<>
    <h1> My Name is {`${Name} ${Company}`}</h1>
    </>,document.getElementById("root"),()=>console.log("Server Started")); */

/* Internal CSS */

/* const byte = {
    color:"red"
} */

//Assgiment to display date and time

/* const currentdate = new Date().toLocaleDateString();
const currentday = new Date().toLocaleTimeString();
ReactDOM.render(<>
    <h1 className="alpha"> My Name is { } {`${Name} ${ Company}`}</h1>
    <h1 style={byte}>Current Date is{ } {`${currentdate}`}</h1>
    <h1>Current Day is{ } {`${currentday}`}</h1>
    <a href="https://www.google.com/">Google</a>
    </>,document.getElementById("root"),()=>console.log("Server Started"));
 */

/* Note --
We cannot use class keyword for allocating class name in JSX because
it is already reserved so that's why we use className keyword. */

let greeting = "";
let cssstyle = {};
let curdate = new Date();
let hours = curdate.getHours();

if (hours >= 1 && hours <= 11) {
    greeting = "Good Morning";
    cssstyle.color = "green";
}
else if (hours >= 12 && hours <= 17) {
    greeting = "Good Afternoon";
    cssstyle.color = "yellow";
}
else {
    greeting = "Good Night";
    cssstyle.color = "black";
}

ReactDOM.render(<>
    <div style={{textAlign:"center"}}>
        <h1> Hello Sujit <span style={cssstyle}>{greeting}</span></h1>
        <Heading></Heading>
    </div>
</>, document.getElementById("root"), () => console.log("Server Started"));


