import React from "react";

const ComB = (props) => {
  return (
    <>
      <h1>ComB</h1>
      {console.log("B")}
    </>
  );
};

export default React.memo(ComB);
