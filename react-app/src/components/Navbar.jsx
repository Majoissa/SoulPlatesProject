import React from "react";
import NavBrand from "./Navbrand";
import NavLinks from "./Navlinks";
import logoimg from "./Logoo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavBrand imglogo={logoimg} />
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
          <NavLinks
            link1="home"
            link2="about us"
            link3="beneficiaries"
            link4="volunteers"
            link5="donors"
            link6="contact"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
