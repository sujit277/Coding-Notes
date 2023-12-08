import React from "react";

// Class Component
class Class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { company, salary } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Sujit Kumar Verma</h1>
        <h1>{company}</h1>
        <h1>{salary}</h1>
      </div>
    );
  }
}

export default Class;
