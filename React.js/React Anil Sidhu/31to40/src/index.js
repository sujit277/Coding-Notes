import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Parent from './Parent';
//import Style from './Style';
//import Map from './Map';
import Pure from './Pure';
//import ImPure from './ImPure';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Style /> */}
    {/* <Map/> */}
    {/* <Parent/> */}
    <Pure/>
    {/* <ImPure/> */}
  </React.StrictMode>
);

