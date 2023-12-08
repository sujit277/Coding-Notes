import React from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sujit Kumar Verma",
    };
    console.log("LifecycleA construtor is called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps is called");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount is called");
  }

  render() {
    console.log("LifecycleA render is called");
    return (
      <div style={{ textAlign: "center" }}>
        <h1>LifeCycle Methods</h1>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
