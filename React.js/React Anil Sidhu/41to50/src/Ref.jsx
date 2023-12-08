import React from "react";
import { createRef } from "react";

// Useref in class component
class Ref extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  getValue() {
    console.log(this.inputRef.current.value);
  }

  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>Ref in React</h1>
          <input type="text" name="name" ref={this.inputRef}></input>
          <button type="button" onClick={()=> this.getValue()}>
            GetInputValue
          </button>
        </div>
      </>
    );
  }
}

export default Ref;
