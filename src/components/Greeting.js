import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input 
        type="text" 
        id="nameInput" 
        value={name} 
        onChange={handleChange} 
      />
      {name && <p>Hello {name}!</p>}
    </div>
  );
};

export default Greeting;
