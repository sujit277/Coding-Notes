import React, { useState } from "react";

const App = () => {
  /* Logic for button click Increment of count value */

  // const [count, setCount] = useState(0);
  // function increment() {
  //   setCount(count + 1);
  // }
  // return (
  //   <>
  //     <div style={{ textAlign: "center" }}>
  //       <h1>{count}</h1>
  //       <button onClick={increment}>On Click</button>
  //     </div>
  //   </>
  // );

  /* Logic for button click time update */

  // let time = new Date().toLocaleTimeString();
  // const [currenttime, updatedTime] = useState(time);
  // function updateTime() {
  //   time = new Date().toLocaleTimeString();
  //   updatedTime(time);
  // }
  // setInterval(updateTime, 1000);
  // return (
  //   <>
  //     <div style={{ textAlign: "center" }}>
  //       <h1>{currenttime}</h1>
  //       <button onClick={updateTime}>Click Me</button>
  //     </div>
  //   </>
  // );

  /* Logic for background change on click events */

  // let green = "green";
  // let [bgColor, bgColorSet] = useState(green);
  // function updateBgColor() {
  //   bgColorSet("red");
  // }
  // return (
  //   <div
  //     style={{
  //       backgroundColor: bgColor,
  //       width: "100%",
  //       height: "100vh",
  //       textAlign: "center",
  //     }}
  //   >
  //     <button onClick={updateBgColor}>Click Me</button>
  //   </div>
  // );

  /* Logic for printing Fullname via taking through text Box */

  // let [name, setname] = useState("");
  // let [fullname, setfullname] = useState("");
  // function updateName() {
  //   setfullname(name);
  // }
  // function inputevent(event) {
  //   setname(event.target.value);
  // }
  // return (
  //   <>
  //     <div style={{ textAlign: "center" }}>
  //       <h1>Hello {fullname}</h1>
  //       <input
  //         type="text"
  //         placeholder="Enter your Name"
  //         onChange={(event) => {
  //           inputevent(event);
  //         }}
  //       />
  //       <button onClick={updateName}>Click Me</button>
  //     </div>
  //   </>
  // );

  /* Logic for Printing Fullname via taking through text Box and giving alert */

  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
  });

  function inputevent(event) {
    const name = event.target.name;
    const value = event.target.value;
    setfullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  }

  function save(event) {
    event.preventDefault();
    const name = `${fullName.fName} ${fullName.lName}`;
    alert(name);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={save}>
          <h1>
            {fullName.fName} {fullName.lName}
          </h1>
          <input
            type="text"
            onChange={(event) => {
              inputevent(event);
            }}
            placeholder="Enter FirstName"
            name="fName"
            value={fullName.fName}
          />
          <input
            type="text"
            onChange={(event) => {
              inputevent(event);
            }}
            placeholder="Enter Lastname"
            name="lName"
            value={fullName.lName}
          />
          <button type="submit">Click Me</button>
        </form>
      </div>
    </>
  );
};

export default App;
