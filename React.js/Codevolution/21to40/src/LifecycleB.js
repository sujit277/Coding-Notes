import React from "react";

class LifecycleB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sujit Kumar Verma",
    };
    console.log("LifecycleB construtor is called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps is called");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount is called");
  }

  render() {
    console.log("LifecycleB render is called");
    return <div style={{ textAlign: "center" }}></div>;
  }
}

export default LifecycleB;
