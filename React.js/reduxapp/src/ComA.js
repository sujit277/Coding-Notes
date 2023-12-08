import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ComB from "./ComB";
import ComC from "./ComC";
import { incNumber, decNumber } from "./state/actions/actions";

const ComA = () => {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="Container-fluid">
        <h1 style={{ color: "blue", textAlign: "center" }}>Counter Game</h1>
        <h1 style={{ textAlign: "center" }}>Count {mystate}</h1>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-danger mx-5"
            onClick={() => dispatch(incNumber())}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(decNumber())}
          >
            Decrement
          </button>
        </div>
        <ComB />
        <ComC />
      </div>
    </>
  );
};

export default ComA;
