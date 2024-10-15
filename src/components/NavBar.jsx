import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/icao-logo.svg";

const NavBar = () => {
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        style={{
          height: "75px",
          paddingLeft: "300px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#0054A4", padding: "20px 20px" }}
      >
        <a className="navbar-brand text-white" href="#">
          Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                State Letter
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/stateletter/state">
                  State Letter View
                </Link>
                <Link className="dropdown-item" to="/stateletter/secretriat">
                  Secretariat Analysis
                </Link>
                <Link className="dropdown-item" to="/stateletter/anc">
                  Review by ANC
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
