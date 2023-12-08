import { useState, useEffect } from "react";
import "./App.css";
import ComA from "./Components/ComA/ComA";
import ComB from "./Components/ComB/ComB";

function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNum(num + 1);
    }, 2000);
  }, []);

  return (
    <>
      <h1>{num}</h1>
      <ComA />
      <ComB />
    </>
  );
}

export default App;

/* 
Memo - 
It is a way of Creating Pure Components in React
React.memo is a higher order component. If your component renders the same
result given the same props, you can wrap it in a call to React.memo for a
performance boost in some cases by memoizing the result. This means that 
React will skip rendering the component, and reuse the last rendered result.
 */
