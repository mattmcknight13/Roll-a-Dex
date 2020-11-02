import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const pageButtonStyle = {
    color: "black",
    border: "solid 1px rgb(107,107,107)",
    background: "rgb(237,237,237)",
    textDecoration: "none",
    justifyContent: "spaceEvenly",
  };

  return (
    <div>
      <nav className="nav">
        <Link style={pageButtonStyle} to="/">
          Create NPC
        </Link>
        <Link style={pageButtonStyle} to="/sheet">
          Random Npc
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
