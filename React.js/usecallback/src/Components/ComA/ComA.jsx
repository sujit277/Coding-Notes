import React, { useCallback } from "react";
import ComB from "../ComB/ComB";
import { useState } from "react";

const ComA = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(1);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const parentComponent = () => {
    console.log("Parent Component is Rendered");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>UseCallBack</h1>
      <div className="row mt-5">
        <div className="col-6 mx-auto">
          <div>
            <input
              type="number"
              className="form-control"
              value={number}
              onChange={(e) => setNumber(parseInt(e.target.value))}
            ></input>
          </div>
          <h1>{count}</h1>
          <button
            className="btn btn-danger mx-3 mt-4"
            onClick={() => setNumber(number + 1)}
          >
            Increment
          </button>
          <button
            className="btn btn-danger mx-3 mt-4"
            onClick={() => setNumber(number - 1)}
          >
            Decrement
          </button>
          <button
            className="btn btn-success mt-4"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Count
          </button>
          {parentComponent()}
          <ComB getItems={getItems}></ComB>
        </div>
      </div>
    </>
  );
};

export default ComA;
