import React from "react";
class Appfive extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Sujit Kumar Verma" };
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Name of the State Variable is: </h2>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default Appfive;
