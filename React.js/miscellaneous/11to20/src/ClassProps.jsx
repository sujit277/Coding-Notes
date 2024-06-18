import React from "react";
import ComB from "./ComB";

// Class component with props
class ClassProps extends React.Component {
  constructor() {
    super();
    this.state = { name: "Sujit Kumar Verma" };
  }

  changeName() {
    this.setState({ name: "Elon Musk" });
  }

  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>Class Component with Props</h1>
          <ComB name={this.state.name} />
          <button type="button" onClick={()=> this.changeName()}>
            ChangeName
          </button>
        </div>
      </>
    );
  }
}

export default ClassProps;