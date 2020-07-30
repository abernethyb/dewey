import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import "./NavBar.css";

const NavBar = props => {

  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }

  return (
    <header>
      <h1 className="site-title">
        Dewey
      </h1>
      <nav>
        <ul className="nav--container">
          <li>
            <Link className="nav-link" to="/">
              Home
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
          <li>
            <Link className="nav-link" to="/Checkouts">
              Currently Borrowing
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Lending">
              Currently Lending
            </Link>
          </li>
          {props.hasUser
            ? <li>
                <button className="nav-link" onClick={handleLogout}> Logout </button>
              </li>
            : <li>
                <Link className="nav-link" to="/login">Login</Link>
              </li>}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);