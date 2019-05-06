import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
        <ul className="nav">
          <li className="logo nav-item">CB</li>
          <ul className="nav-links">
            <li className="nav-item"><NavLink to="/" activeClassName="home">HOME</NavLink></li>
            <li className="nav-item"><NavLink to="/stuff" activeClassName="stuff">STUFF</NavLink></li>
          </ul>
        </ul>
  );
}

export default Nav;