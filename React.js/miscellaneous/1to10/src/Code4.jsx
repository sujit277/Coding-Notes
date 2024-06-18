import React, { useEffect, useState } from "react";

const Code4 = () => {

  // Assignment Showing selected value of dropdown
  const [num, setNum] = useState(1);
  useEffect(() => {
    alert("I am Clicked");
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>You Choose {num}</h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};
 
export default Code4;
