import React, { useState } from "react";

function App() {

  /* Logic for button click Increment of count value */

  /* let [count, setCount] = useState(0);
  function Inc() {
    setCount(count + 1);
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{count}</h1>
        <button onClick={Inc}>On Click</button>
      </div>
    </>
  ); */


  /* Logic for button click time update */

  /* let time = new Date().toLocaleTimeString();
  let [retime, updatedTime] = useState(time);
  function update() {
    time = new Date().toLocaleTimeString()
    updatedTime(time);
  }
  setInterval(update, 1000);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{retime}</h1>
        <button onClick={update}>Click Me</button>
      </div>
    </>
  ); */


  /* Logic for background change on click events */

  /* let green = "green";
  let [bg, bgSet] = useState(green);
  function update() {
    bgSet("red");
  }
  return (
    <div style={{ backgroundColor: bg, width: "100%", height: "400px", textAlign: "center" }}>
      <button onClick={update}>Click Me</button>
    </div>
  ); */


  /* Logic for printing fullname via taking through text Box */

  /* let [name, setname] = useState("");
  let [fullname, setfullname] = useState("");
  function update() {
    setfullname(name);
  }
  function inputevent(event) {
    setname(event.target.value)
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Hello {fullname}</h1>
        <input type="text" placeholder="Enter your Name" onChange={(event) => { inputevent(event) }} />
        <button onClick={update}>Click Me</button>
      </div>
    </>
  ); */


  /* Logic for printing fullname via taking through text Box */

  /* let [firstname, setfirstname] = useState("");
  let [lastname, setlastname] = useState("");
  let [firstnamenew, setfirstnamenew] = useState("");
  let [lastnamenew, setlastnamenew] = useState("");
  function inputeventone(event) {
    setfirstname(event.target.value);
  }
  function inputeventtwo(event) {
    setlastname(event.target.value);
  }
  function save(event) {
    event.preventDefault();
    setfirstnamenew(firstname);
    setlastnamenew(lastname);
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={save}>
          <h1>{firstnamenew} {lastnamenew}</h1>
          <input type="text" onChange={(event) => { inputeventone(event) }} placeholder="Enter FirstName" value={firstname} />
          <input type="text" onChange={(event) => { inputeventtwo(event) }} placeholder="Enter Lastname" value={lastname} />
          <button type="submit">Click Me</button>
        </form>
      </div>
    </>
  ); */


  /* Logic for printing fullname via taking through text Box and giving alert */

  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  });

  function inputevent(event) {
    const name = event.target.name;
    const value = event.target.value;
    setfullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        }
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        }
      }
    });
  }

  function save(event) {
    event.preventDefault();
    const al = `${fullName.fName}`;
    alert(al);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={save}>
          <h1>{fullName.fName} {fullName.lName}</h1>
          <input type="text" onChange={(event) => { inputevent(event) }} placeholder="Enter FirstName" name="fName" value={fullName.fName} />
          <input type="text" onChange={(event) => { inputevent(event) }} placeholder="Enter Lastname" name="lName" value={fullName.lName} />
          <button type="submit">Click Me</button>
        </form>
      </div>
    </>
  );

}


export default App;