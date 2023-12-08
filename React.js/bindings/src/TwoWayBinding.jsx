import React, { useState } from "react";

const TwoWayBinding = () => {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          value={name}
          placeholder="Enter your Name"
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TwoWayBinding;
