import React from "react";
import User from "./User";

const Map = () => {
  const data = ["Sujit", "Puja", "Chandani", "Anjali"];
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Array with Map Operator</h1>
        {data.map((item) => {
          return <User name={item} key={name} />;
        })}
      </div>
    </>
  );
};

export default Map;
