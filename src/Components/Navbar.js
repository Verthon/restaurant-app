import React from 'react';
import { Link } from 'react-router-dom';
import contactInfo from '../contactInfo';

const Navbar = () => {
  return (
    <nav className="nav" id="mainNav">
      <Link className="nav__link" to="/">
        <h3 className="nav__brand nav__brand--decorative">
          {contactInfo.name}
        </h3>
      </Link>
      <button
        className="navbar__btn"
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
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/book-table">
            Reservation
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
