import React from "react";

// Functional Component
// const Functional = ({ company, salary }) => {
const Functional = (props) => {
  const { company, salary } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sujit Kumar Verma</h1>
      <h1>{company}</h1>
      <h1>{salary}</h1>
    </div>
  );
};

export default Functional;
