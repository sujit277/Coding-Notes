import { React, useState } from "react";
import Parent from "./Components/Parent/Parent";
import Sibling from "./Components/Sibling/Sibling";

const App = () => {
  const [data, setData] = useState([]);

  const updateData = (newData) => {
    setData((prevData) => {
      return [...prevData, newData];
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Component Communication</h1>
      <Parent siblingData={data} />
      <Sibling updateData={updateData} />
    </div>
  );
};

export default App;
