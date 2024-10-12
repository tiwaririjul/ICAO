import React from "react";
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
        class="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#0054A4", padding: "20px 20px" }}
      >
        <a class="navbar-brand text-white">Navbar</a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                State Letter
              </a>
              <div
                class="dropdown-menu text-white"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">
                  State Letter viewer
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
