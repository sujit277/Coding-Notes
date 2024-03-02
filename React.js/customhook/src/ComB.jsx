import React from "react";
import useLocalStorage from "./useLocalStorage";

// Using Custom Hook useLocalStorag to store data in LocalStorage
const ComB = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
};

export default ComB;
