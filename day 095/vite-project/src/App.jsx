import React, { useState } from "react";

function FormExample() {

  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target; 
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      
      <h2>Form Example with One State</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formState.name || ""}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastname"
        placeholder="Enter your lastname"
        value={formState.lastname || ""}
        onChange={handleChange}
        style={{ marginLeft: "10px" }}
      />

      <p>Name: {formState.name}</p>
      <p>Lastname: {formState.lastname}</p>
    </div>
  );
}

export default FormExample;