import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeNavbar = props => {
  return (
    <nav className="nav" id="mainNav">
      <NavLink className="nav__link" to="/">
        <h3 className="navbar__brand">{props.name}</h3>
      </NavLink>
      <button
        className="nav__btn"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="btn__line"></span>
        <span className="btn__line"></span>
        <span className="btn__line"></span>
      </button>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
        </li>
        {props.children}
      </ul>
    </nav>
  );
};

HomeNavbar.propTypes = {
  name: PropTypes.string,
};

export default HomeNavbar;
