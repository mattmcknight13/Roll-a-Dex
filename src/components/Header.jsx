import React from 'react';
import Nav from "./Nav"

function Header(props) {

  const headerStyle = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div>
       <header style={headerStyle}>
          <h1>Roll-a-Dex NPC Generator</h1>
          <Nav />
        </header>
    </div>
  );
}

export default Header;

