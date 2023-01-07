import React from "react";

const App = () => {

  function clickHandler(event) {
    setTimeout(() => {
      console.log(event.target.tagName);
    }, 100);   
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Synthentic and Persist Event</h1>
        <button type="button" onClick={(event) => { clickHandler(event) }}>Trigger Event</button>
      </div>
    </>
  );
}

export default App;