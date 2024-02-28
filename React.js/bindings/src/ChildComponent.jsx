// ChildComponent.js
import React, { useState } from 'react';

function ChildComponent({ message, onMessageChange }) {
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleButtonClick = () => {
    onMessageChange(inputMessage);
    setInputMessage('');
  };

  return (
    <div>
      <p>Message in Child: {message}</p>
      <input type="text" value={inputMessage} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Change Parent Message</button>
    </div>
  );
}

export default ChildComponent;
