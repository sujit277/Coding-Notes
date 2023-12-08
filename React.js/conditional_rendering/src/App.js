import React, { useState } from "react";

// Conditional Rendering in React
const App = () => {
  const [enable, setEnable] = useState(true);

  function changeEnablement() {
    setEnable(!enable);
  }

  function LoggedInUser() {
    return (
      <div>
        <h1>Welcome back! </h1>
        <span>Log in </span>
      </div>
    );
  }

  function LoggedOutUser() {
    return (
      <div>
        <h1>Sign in, please! </h1>
        <span>Log out </span>
      </div>
    );
  }

  const Foo = () => {
    return <button>FOO</button>;
  };
  const Bar = () => {
    return <button>BAR</button>;
  };
  const Default = () => {
    return <button>DEFAULT</button>;
  };

  const ENUM_STATES = {
    foo: <Foo />,
    bar: <Bar />,
    default: <Default />,
  };

  function EnumState({ state }) {
    return <div>{ENUM_STATES[state]}</div>;
  }

  function showWebsite() {
    if (enable) {
      return <LoggedInUser />;
    } else {
      return <LoggedOutUser />;
    }
  }

  function renderSwitch(param) {
    switch (param) {
      case "foo":
        return <h1>EPAM</h1>;
      default:
        return <h1>Accenture</h1>;
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Conditional Rendering in React</h1>
      <button type="button" onClick={changeEnablement}>
        Enable/Disable
      </button>
      {/* Conditional Rendering with if else */}
      {showWebsite()}
      {/* Conditional Rendering using Ternary Operator */}
      {enable ? <LoggedInUser /> : <LoggedOutUser />}
      {/* Conditional Rendering using Inline If with Logical && operator */}
      {enable && <LoggedInUser />}
      {!enable && <LoggedOutUser />}
      {/* Conditional Rendering using enums */}
      <h1>Conditional Rendering with enums</h1>
      <EnumState state="default"></EnumState>
      <EnumState state="bar"></EnumState>
      <EnumState state="foo"></EnumState>
      {/* Conditional Rendering using Switch case operator */}
      {renderSwitch("foo")}
    </div>
  );
};

export default App;
