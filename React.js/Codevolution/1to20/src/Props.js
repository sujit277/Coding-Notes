import React from "react";
import Functional from "./Functional";
import Class from "./Class";

//Props destructuring
const Props = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Functional company="epam" salary="12.5LPA" />
      <Class company="epam" salary="12.5LPA" />
    </div>
  );
};

export default Props;
