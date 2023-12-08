import React from "react";
import Child from "../Child/Child";

// Child to Parent Component Communication
const Parent = (props) => {
  const receiveData = (data) => {
    console.log(data);
  };

  const data = [
    { company: "EPAM Systems", salary: "12.5LPA" },
    { company: "Accenture", salary: "4.5LPA" },
    { company: "DLT", salary: "1.2LPA" },
  ];

  return (
    <div style={{ textAlign: "center", color: "green" }}>
      <h1>Parent Component</h1>
      {props.siblingData.length !== 0 && (
        <h1> Sibling Data is {props.siblingData}</h1>
      )}
      <Child data={data} receiveData={receiveData} />
    </div>
  );
};

export default Parent;
