import './App.css';
import React,{useRef} from "react";

function App() {
  let inputref = useRef(0);

  function handleInput(){
    inputref.current.value = "Sujit";
    inputref.current.focus();
    inputref.current.style.color = "red";
  }

  return (
    <>
    <div className='App' style={{textAlign:"center",backgroundColor:"lightblue",height:"577px"}}>
      <h1 style={{textAlign:"center"}}>UseRef in React</h1>
      <input className="mt-5" type="text" ref={inputref}></input>
      <button  className="btn btn-success" onClick={handleInput}>Click</button>
    </div>
    </>
  );
}

export default App;
