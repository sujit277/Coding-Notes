// ParentComponent.js
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

//One way binding
function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent");

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <p>Message in Parent: {message}</p>
      <ChildComponent message={message} onMessageChange={handleMessageChange} />
    </div>
  );
}

export default ParentComponent;
