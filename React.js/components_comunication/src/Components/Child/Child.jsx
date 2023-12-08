import React from "react";

// Parent to Child Communication
const Child = (props) => {
  const ChildItem = (item) => {
    return (
      <h1 key={item.company}>
        Company {item.company} CTC {item.salary}
      </h1>
    );
  };

  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h1>Child Component</h1>
      {props.data.map((item) => ChildItem(item))}
      <input
        type="text"
        onChange={(event) => {
          props.receiveData(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default Child;
