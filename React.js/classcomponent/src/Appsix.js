// SetIUpdate  - used to Update data of the State variable

import React from "react";

class Appsix extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Sujit Kumar Verma" };
  }

  updateName = () => {
    this.setState({ name: "Priyanka Suman" });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Name of the State Variable is :</h2>
        <h2>{this.state.name}</h2>
        <button onClick={this.updateName}>Update Name</button>
      </div>
    );
  }
}

export default Appsix;
