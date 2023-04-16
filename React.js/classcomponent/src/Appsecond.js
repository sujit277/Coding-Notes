import React from "react";
import { ReactDOM } from "react";

/* Props are Properties. They are like Arguments.
Value for Props are Define defaultProps Section and used in the render()
return() function */

class Appsecond extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.props.name} Welcome</h1>
        <h1>I Stay in {this.props.address}</h1>
        <h1>I Work as {this.props.profession}</h1>
      </div>
    );
  }
}

Appsecond.defaultProps = {
  name: "Sujit Verma",
  address: "Bangalore",
  profession: "Full Stack Developer",
};

export default Appsecond;
