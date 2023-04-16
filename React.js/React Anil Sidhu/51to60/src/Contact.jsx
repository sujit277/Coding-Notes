import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Contact Component</h1>
        <Link to="/contact/india">India Contact Page</Link>
        <br></br>
        <Link to="/contact/russia">Russia Contact Page</Link>
        <Outlet />
      </div>
    </>
  );
};

export default Contact;
