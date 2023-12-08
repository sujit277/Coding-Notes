import React from "react";

// State management in Class component
class Setstate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("State updated", this.state.count);
    // });
    // console.log("State updated", this.state.count);

    this.setState((prevState)=>({
      count : prevState.count + 1
    }))
  }

  incrementFiveTimes(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFiveTimes()}>Increment Five Times</button>
      </div>
    );
  }
}

export { Setstate };


// React may group muliple setState calls into a single update for better 
// performance so sometimes you may lose previous state value.
// In order to get rid of above situation use prevState in setState method
  
