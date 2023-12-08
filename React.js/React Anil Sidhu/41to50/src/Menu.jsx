import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/service">Service</Link>
        <br></br>
      </div>
    </>
  );
};

export default Menu;