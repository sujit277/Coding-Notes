import React from "react";
import withCounter from "./withCounter";

class HoverCounter extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>{this.props.name}</h3>
        <h1>Counter Increment with HoverCounter</h1>
        <h1>{this.props.count}</h1>
        <button onMouseOver={this.props.increment}>HoverCounter</button>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
