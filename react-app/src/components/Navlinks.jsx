import React from "react";
import { Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          {props.link1}
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          {props.link2}
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/beneficiaries" className="nav-link">
         {props.link3}
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          {props.link4}
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          {props.link5}
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
