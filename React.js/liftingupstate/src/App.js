import { useState } from "react";
import "./App.css";
import ComA from "./ComA";
import ComB from "./ComB";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <ComA count={count} />
      <ComB handleClick={handleClick} count={count} />
    </>
  );
}

export default App;
