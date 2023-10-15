import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBrand(props) {
  return (
    <Link to="/" className="navbar-brand">
      <img className="logo" src={props.imglogo} alt="logo app img" />
    </Link>
  );
}

export default NavBrand;
