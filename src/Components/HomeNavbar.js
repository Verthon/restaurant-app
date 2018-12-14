import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark container" id="mainNav">
      <NavLink className="navbar-brand" to="/"><h3>Alkinoos Taverna</h3></NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#ingredients">Ingredients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#reviews">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="fa fa-twitter"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="fa fa-facebook"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="fa fa-youtube"></i></Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavbar;