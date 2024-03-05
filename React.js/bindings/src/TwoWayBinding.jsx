import React, { useState } from 'react';

function TwoWayBinding() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    // Update the state variable 'name' with the input value
    setName(event.target.value);
  };

  return (
    <div>
      {/* Input field bound to the 'name' state variable */}
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Enter your name" 
      />
      {/* Display the current value of the 'name' state variable */}
      <p>Hello, {name}</p>
    </div>
  );
}

export default TwoWayBinding;
