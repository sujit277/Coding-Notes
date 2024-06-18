import React from "react";
import Destroy from "./Destroy";

//LifeCycle Hooks of React Class Component
class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = { count: 0, visible: true };
    console.log("Constructor is Called");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  componentWillMount(){
    console.log('componentWillMount is Called');
  }

  componentDidMount() {
    console.log("ComponentDidMount is Called");
  }

  shouldComponentUpdate() {
    if (this.state.count < 10) {
      return true;
    } else {
      alert("Maximum Limit is Reached");
      return false;
    }
  }

  componentWillUpdate(){
    console.log(`componentWillUpdate is called`);
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log("ComponentDidUpdate is Called");
    console.log(preProps);
    console.log(preState);
    console.log(snapshot);
  }

  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>Lifecycle Hooks in React</h1>
          {this.state.visible ? <Destroy /> : null}
          <button
            type="button"
            onClick={() => {
              this.setState({ visible: !this.state.visible });
            }}
          >
            Delete Component
          </button>
          <h1>{this.state.count}</h1>
          <button
            type="button"
            onClick={() => {
              this.increment();
            }}
          >
            Increment
          </button>
        </div>
        {console.log("Render is Called")}
      </>
    );
  }
}

export default LifeCycle;