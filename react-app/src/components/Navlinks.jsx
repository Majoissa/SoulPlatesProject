import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          HOME
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          ABOUT US
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/beneficiaries" className="nav-link">
          BENEFICIARIES
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          VOLUNTEERS
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/donation" className="nav-link">
          DONORS
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
