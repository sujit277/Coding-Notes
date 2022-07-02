//import React from "react";
//import AppB from "./AppB";
import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();
const App = () =>
{
  return(
  <>
  <FirstName.Provider value={'Sujit Kumar Verma'}>
    <LastName.Provider value={'EPAM'}>
     <ComA/>
    </LastName.Provider>
  </FirstName.Provider>   
  </>
  );
}

export default App; 
export {FirstName,LastName};



/* import React, { useEffect, useState } from "react";

const App = () => {

  const [num,setNum] = useState(0);
  useEffect(()=>{alert("I am Clicked");},[])
  return (<button onClick={()=>setNum(num+1)}>Click Me {num}</button>;)

  return(
     <div>
    <h1>You Choose {num}</h1>
    <select value={num} onChange={(event)=>{SetNum(event.target.value)}}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    </div>
  );

  return (
    <>
    <AppB/>
    </>
    
  )
}

export default App; */