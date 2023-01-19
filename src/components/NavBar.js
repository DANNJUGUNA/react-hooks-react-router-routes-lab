import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    size:"20px",
    textDecoration: "none",
  
  };
  return (<div className="navbar">
    <NavLink
        to="/"
        exact
        style={linkStyles}
       
      >
        Home
      </NavLink>
      <NavLink
        to="/actors"
        style={linkStyles}
      >
        Actors
      </NavLink>
      <NavLink
        to="/directors"
        style={linkStyles}
      >
        Directors
      </NavLink>
      <NavLink
        to="/movies"
        style={linkStyles}
      >
      Movies
      </NavLink>
  </div>)
}

export default NavBar;
