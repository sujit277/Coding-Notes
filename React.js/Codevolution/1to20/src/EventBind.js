import React from "react";

//Event Binding in class component
class EventBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    /* Approach 3 - Binding this in the constructor*/
    // this.clickHandler = this.clickHandler.bind(this);
  }

  /* Approach 4 - Declaring function as arow function */
  clickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //   clickHandler() {
  //     this.setState({ count: this.state.count + 1 });
  //   }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.state.count}</h1>
        {/* Approach 1 - Binding this to the function on event*/}
        {/*  <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Approach 2 - Using arrow function on event*/}
        {/*  <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
