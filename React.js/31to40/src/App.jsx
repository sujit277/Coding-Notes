import React, { useState } from "react";

function App() {

  // Logic for button click Increment of count value

  /*  let [count,setCount] = useState(0);
    function Inc()
    {
      setCount(count+1);
    }
   return (
   <>
   <h1>{count}</h1>
   <button onClick={Inc}>On CLick</button>
   </>
   ); */

  //Logic for button click time update 

  /* let time = new Date().toLocaleTimeString();
  let [retime,updatedTime] = useState(time);
  function update()
  {
    time = new Date().toLocaleTimeString()
    updatedTime(time);
  }
  setInterval(update,1000);
  return(
  <>
  <h1>{retime}</h1>
  <button onClick={update}>Click Me</button>
  </>
  ); */

  // Logic for background change on click events

  /* let green = "green";
  let [bg,bgSet] = useState(green);
  function update()
  {
    bgSet("red");
  }
  return(
  <div style = {{backgroundColor:bg,width:1500,height:1500 }}>
    <button onClick={update}>Click Me</button>
  </div>
  ); */

  // Logic for printing fullname via taking through text Box

  /* let [name,setname] = useState("");
  let [fullname,setfullname] =useState("");
  function update()
  {
    setfullname(name);
  }
  function inputevent(event)
  {
    setname(event.target.value)
  }
  return(
    <>
    <h1>Hello {fullname}</h1>
    <input type="text" placeholder="Enter your Name" onChange={inputevent}/>
    <button onClick={update}>Click Me</button>
    </>
  ); */

  let [firstname, setfirstname] = useState("");
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
      <form onSubmit={save}>
        <h1>{firstnamenew} {lastnamenew}</h1>
        <input type="text" onChange={inputeventone} placeholder="Enter FirstName" value={firstname} />
        <input type="text" onChange={inputeventtwo} placeholder="Enter Lastname" value={lastname} />
        <button type="submit">Click Me</button>
      </form>
    </>
  );



  /* const [fullName, setfullName] = useState({
    fName:"",
    lName:""
  });
  
  function inputevent(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(event.target.placeholder);

    const name = event.target.name;
    const value = event.target.value;

    setfullName((preValue)=>{
      if(name === "fName"){
        return{
          fName:value,
          lName:preValue.lName
        }
      }else if(name === "lName"){
        return{
          fName:preValue.fName,
          lName:value
        }
      }
    });
    
    function save(event) {
    event.preventDefault();
    const al = `${fullName.fName}`;
    alert(al);
  }
  return (
    <>
      <form onSubmit={save}>
        <h1>{fullName.fName} {fullName.lName}</h1>
        <input type="text" onChange={inputevent} placeholder="Enter FirstName" name="fName" value={fullName.fName} />
        <input type="text" onChange={inputevent} placeholder="Enter Lastname" name="lName" value={fullName.lName} />
        <button type="submit">Click Me</button>
      </form>
    </>
  );*/
}
export default App;