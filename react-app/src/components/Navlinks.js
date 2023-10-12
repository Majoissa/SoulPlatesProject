import React from "react";

function NavLinks(props) {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="www.google.com">
          {props.link1}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="www.google.com">
          {props.link2}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="www.google.com">
          {props.link3}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="www.google.com">
          {props.link4}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="www.google.com">
          {props.link5}
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
