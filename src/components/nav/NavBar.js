import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Dewey
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/PublicLibrary">
            Public Library
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/PersonalLibrary">
            Your Library
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;