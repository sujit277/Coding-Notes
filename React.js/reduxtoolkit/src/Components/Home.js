import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            Redux Toolkit
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/counter"} className="nav-link">
                  Counter
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/employee"} className="nav-link">
                  Employee
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
