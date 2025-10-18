import React from "react";

function Nav({ title, textColor, bgColor }) {
  return (
    <nav
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1>{title}</h1>
    </nav>
  );
}

export default Nav;