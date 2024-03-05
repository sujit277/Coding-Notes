import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from './Main';
//import GetAPI from './GetAPI';
//import Stateless from './Stateless';
//import Statefull from "./Statefull";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
    {/* <GetAPI/> */}
    {/* <Stateless/> */}
    {/*   <Statefull /> */}
  </React.StrictMode>
);
