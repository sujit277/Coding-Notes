import { useState } from "react";
import "./App.css";

const App = () => {

  // Assignment Program for Counter Value Increment

  // const [num, setNum] = useState(0);
  // function increment() {
  //   setNum(num + 1);
  // }
  // function decrement() {
  //   if (num === 0) {
  //     alert("Minimum Limit Reached");
  //   } else {
  //     setNum(num - 1);
  //   }
  // }
  // return (
  //   <>
  //     <div className="mainBox">
  //       <div className="box">
  //         <div className="box1">
  //           <h1 style={{ color: "white", textAlign: "center" }}>{num}</h1>
  //         </div>
  //         <div className="box2">
  //           <button onClick={increment} className="btn1">
  //             +
  //           </button>
  //           <button onClick={decrement} className="btn2">
  //             -
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  

  /* Program for Printing Input field value on click of Save button giving alert */

  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
  });
  function inputevent(event) {
    const { name, value } = event.target;
    setfullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function save(event) {
    event.preventDefault();
    const name = `${fullName.fName} ${fullName.lName}`;
    alert(name);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={save}>
        <h1>
          {fullName.fName} {fullName.lName}
        </h1>
        <input
          type="text"
          onChange={inputevent}
          placeholder="Enter FirstName"
          name="fName"
          value={fullName.fName}
        />
        <input
          type="text"
          onChange={inputevent}
          placeholder="Enter Lastname"
          name="lName"
          value={fullName.lName}
        />
        <button type="submit">Click Me</button>
      </form>
    </div>
  );
};

export default App;
