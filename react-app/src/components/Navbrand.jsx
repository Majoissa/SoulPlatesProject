import React from "react";
import "./Navbar.css";

function NavBrand(props) {
  return (
    <a className="navbar-brand" href="www.google.com">
      <img className="logo" src={props.imglogo} alt="logo app img" />
    </a>
  );
}

export default NavBrand;
