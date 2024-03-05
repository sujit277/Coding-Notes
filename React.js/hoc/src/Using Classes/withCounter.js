import React from "react";

const withCounter = (WrappedComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.increment = this.increment.bind(this);
    }

    increment() {
      this.setState({ count: this.state.count + 1 });
    }
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increment={this.increment}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
