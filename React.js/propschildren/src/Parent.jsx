import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Parent Component</h1>
        <Child>
          <h1>Sujit Kumar Verma</h1>
          <h1>EPAM Systems</h1>
          <h1>12 LPA</h1>
        </Child>
      </div>
    </>
  );
};

export default Parent;
