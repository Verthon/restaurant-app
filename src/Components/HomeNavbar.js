import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeNavbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark container" id="mainNav">
      <NavLink className="navbar-brand" to="/">
        <h3 className="navbar__brand">{props.name}</h3>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          {props.children}
        </ul>
      </div>
    </nav>
  );
};

HomeNavbar.propTypes = {
  name: PropTypes.string,
};

export default HomeNavbar;
