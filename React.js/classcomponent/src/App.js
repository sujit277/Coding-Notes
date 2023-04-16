import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          Id: 101,
          Name: "Sujit",
          Dept: "IT",
          Designation: "Full Stack Developer",
        },
        {
          Id: 102,
          Name: "Aman",
          Dept: "IT",
          Designation: "Full Stack Developer",
        },
        {
          Id: 103,
          Name: "Ashish",
          Dept: "IT",
          Designation: "Full Stack Developer",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <DisplayName />
        <ul>
          {this.state.data.map((item) => (
            <DisplayData data={item} key={item.Id} />
          ))}
        </ul>
      </div>
    );
  }
}

class DisplayName extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Employee Information Table</h2>
      </div>
    );
  }
}

class DisplayData extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.props.data.Id}</h1>
        <h1>{this.props.data.Name}</h1>
      </div>
    );
  }
}

export default App;
