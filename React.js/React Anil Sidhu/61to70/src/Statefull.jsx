import React, { useState } from "react";

// Statefull component in React
class Statefull extends React.Component {

  constructor(props) {
    super(props);
    // Define initial state
    this.state = {
      count: 0
    };
  }

  // Function to increment the count state
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Stateful Component Example</h2>
        {/* Display the count state */}
        <p>Count: {this.state.count}</p>
        {/* Button to increment the count */}
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default Statefull;
