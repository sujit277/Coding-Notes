import React from "react";
import OneWayBinding from "./OneWayBinding";
import TwoWayBinding from "./TwoWayBinding";
import Derived from "./Derived";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/*  <h1>Bindings in React</h1> */}
      {/*  <OneWayBinding/> */}
      {/* <h1>Two Way Binding</h1> */}
     {/*  <TwoWayBinding /> */}
     <Derived/>
    </div>
  );
};

export default App;
