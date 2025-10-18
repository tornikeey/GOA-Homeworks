import React from "react";
import Nav from "./nav.jsx";

function App() {
  return (
    <div>
      <Nav 
        title="My Navigation" 
        textColor="white" 
        bgColor="blue" 
      />

      <Nav 
        title="Second Nav" 
        textColor="black" 
        bgColor="lightgray" 
      />

      <Nav 
        title="Third Nav" 
        textColor="yellow" 
        bgColor="green" 
      />
    </div>
  );
}

export default App;