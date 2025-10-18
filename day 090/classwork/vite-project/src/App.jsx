import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // გამოვიყენოთ PrevValue
    setCount(prevValue => prevValue + 1);
    setCount(prevValue => prevValue + 1);
    // ორივე გამოიყენებს განახლებულ მნიშვნელობას, შესაბამისად შედეგიც 2 იქნება
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Counter;