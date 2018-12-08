import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
<nav className="navbar navbar-expand-lg navbar-light container" id="mainNav">
      <NavLink className="navbar-brand" to="/"><h2>Resto</h2></NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#"><i className="fa fa-twitter"></i></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#"><i className="fa fa-facebook"></i></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#"><i className="fa fa-youtube"></i></NavLink>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;