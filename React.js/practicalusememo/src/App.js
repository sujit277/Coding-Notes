import "./App.css";
import React, { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const MultiplyCountMemo = useMemo(
    function MultiplyCount() {
      console.log("Function Called");
      return count * 5;
    },
    [count]
  );

  return (
    <>
      <div
        className="App"
        style={{ backgroundColor: "lightblue", height: "577px" }}
      >
        <h1 style={{ textAlign: "center", color: "red" }}>
          UseMemo Hook In React
        </h1>
        <h2 style={{ textAlign: "center" }}>Count : {count} </h2>
        <h2 style={{ textAlign: "center" }}>Item : {item} </h2>
        <h2>{MultiplyCountMemo}</h2>

        <div className="text-center mt-5">
          <button
            className="btn btn-success mx-2"
            onClick={() => setCount(count + 1)}
          >
            Update Count
          </button>
          <button className="btn btn-success" onClick={() => setItem(item + 1)}>
            Update Item
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
