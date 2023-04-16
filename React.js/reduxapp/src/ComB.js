import React from "react";
import { useSelector } from "react-redux";

const ComB = () => {
  const mydata = useSelector((state) => state.changeTheNumber);
  return (
    <>
      <br></br>
      <h1 style={{ textAlign: "center" }}>My Name is Sujit</h1>
      <h1 style={{ textAlign: "center" }}>Count is {mydata}</h1>
    </>
  );
};

export default ComB;
