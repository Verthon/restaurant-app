import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = props => {
  const navRef = React.createRef();
  const handleNavbarToggle = () => {
    navRef.current.classList.toggle('nav__list--active');
  }
  return (
    <nav className="nav container" id="mainNav">
      <NavLink className="nav__link" to="/">
        <h3 className="navbar__brand">Alkinoos Taverna</h3>
      </NavLink>
      <button
        className="nav__btn"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleNavbarToggle}
      >
        <span className="btn__line"></span>
        <span className="btn__line"></span>
        <span className="btn__line"></span>
      </button>
      <ul className="nav__list" ref={navRef}>
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

Navbar.propTypes = {
  name: PropTypes.string,
};

export default Navbar;
