import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navBar">
      <div className="nav-brand">
      <NavLink to="/">Ibrahim Sowunmi</NavLink>
      </div>
      <div className="nav-links">
      <NavLink to="/blog">Blog</NavLink>
      <span style={{ margin: "0 8px"}}>/</span>
      <NavLink to="/art">Art</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;