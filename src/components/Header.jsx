import React from 'react';
import "./Header.css"
import Nav from "./Nav"

function Header() {

  return (
    <div>
       <header className="header">
          <h1>Roll-a-Dex NPC Generator</h1>
          <Nav />
        </header>
    </div>
  );
}

export default Header;

