import React from "react";

class ComA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Render in Child is Called");
    return (
      <>
        <h1>Child Component</h1>
        <h1>{this.props.count}</h1>
      </>
    );
  }
}

export default ComA;
