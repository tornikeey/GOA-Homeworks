import React, { useState } from "react";

function App() {
  // Create state with initial value 0
  const [click, setClick] = useState(0);

  // Function to increase the state by 1
  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div>
      <h1>Click Counter</h1>
      <p>You clicked {click} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;