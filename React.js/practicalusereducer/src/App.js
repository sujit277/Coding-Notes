import "./App.css";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1 className="mb-5" style={{ textAlign: "center" }}>
        Using useReducer Hook
      </h1>
      <h1 className="mb-5" style={{ textAlign: "center" }}>
        {state}
      </h1>
      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-success mx-3"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
