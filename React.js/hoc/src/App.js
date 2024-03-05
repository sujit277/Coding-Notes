import "./App.css";
// import ClickCounter from './Using Classes/ClickCounter';
// import MouseHover from './Using Classes/HoverCounter';
import ClickCounter from "./Using Function/ClickCounter";
import MouseHover from "./Using Function/HoverCounter";

function App() {
  return (
    <>
      <ClickCounter name="Higher Order Component" />
      <MouseHover name="Higher Order Component" />
    </>
  );
}

export default App;
