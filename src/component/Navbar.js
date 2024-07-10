import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" exact to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" exact to="/">
                Home
              </Link> {/*To accomodate  reac router dom we will use , link and to in place of a and href */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to="/about"> {/* Use , exact to prevent partial matcing in react, alway use eact to , beware */}
                {props.about}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary mx-2" type="submit">
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              forhtml="flexSwitchCheckDefault"
            >
              Enable Dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.defaultProps={
//    title: "Set title heree",
//    about:"About text here"
// }
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
}; // type of prop we are sending, if we send a number in the code, it will not render
