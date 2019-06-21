import React from 'react';
import { Link } from 'react-router-dom';
import contactInfo from '../contactInfo';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light container"
      id="mainNav"
    >
      <Link className="navbar-brand" to="/">
        <h3>{contactInfo.name}</h3>
      </Link>
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
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
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
      </div>
    </nav>
  );
};

export default Navbar;
