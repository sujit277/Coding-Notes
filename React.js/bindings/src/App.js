import React from "react";
import Derived from "./Derived";
import ParentComponent from "./ParentComponent";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
     <Derived/>
     <ParentComponent/>
    </div>
  );
};

export default App;
