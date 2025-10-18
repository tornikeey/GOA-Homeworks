import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    if (name) {
      alert(`Hello ${name}`);
    }
  }, [name]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enter your name:</h2>
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;

// useEffect გამოიყენება იმისთვის, რომ რეაქთში გავუშვათ ისეთი მოქმედებები, რომლებიც პირდაპირ არ უკავშირდება კომპონენტის JSX-ს (მაგალითად alert, console.log, API fetch და ა.შ.).
