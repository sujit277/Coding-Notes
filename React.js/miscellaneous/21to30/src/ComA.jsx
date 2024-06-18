import React from "react";

const ComA = (props) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Component A</h1>
        <button type="button" onClick={props.alertMessage}>
          Show Alert
        </button>
      </div>
    </>
  );
};

export default ComA;
