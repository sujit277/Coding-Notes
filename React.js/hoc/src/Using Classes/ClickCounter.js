import React from "react";
import withCounter from "./withCounter";

class ClickCounter extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>{this.props.name}</h3>
        <h1>Counter Increment with ClickCounter</h1>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.increment}>ClickCounter</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
