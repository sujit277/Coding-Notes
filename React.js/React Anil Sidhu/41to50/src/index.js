import React from 'react';
import ReactDOM from 'react-dom/client';
import HOCComponent from './HOCComponent';
import './index.css';
//import App from './App';
//import Ref from './Ref';
//import Useref from './Useref';
//import ForwardRef from './ForwardRef';
// import Controlled from './Controlled';
//import UnControlled from './UnControlled';
//import Menu from './Menu';
//import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*  <App /> */}
    {/* <Ref/> */}
    {/* <Useref/> */}
    {/* <ForwardRef/> */}
   {/*  <Controlled /> */}
    {/* <UnControlled/> */}
    <HOCComponent/>
    {/* <App/> */}
  </React.StrictMode>
);

