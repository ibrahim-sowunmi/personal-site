import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Text, Heading } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav className="navBar">
      <div className="nav-brand">
        <Heading as="h1" size="2xl">
          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            <NavLink to="/">Ibrahim Sowunmi</NavLink>
          </Text>
        </Heading>
      </div>
      <div className="nav-links">
        <NavLink to="/blog">Blog</NavLink>
        <span style={{ margin: "0 8px" }}>/</span>
        <NavLink to="/art">Art</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
