import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              React Routing
            </NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item px-2">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="/country/list" className="nav-link">
                    Countries List
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="/contact" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
