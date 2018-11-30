import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
<nav className="navbar navbar-expand-lg navbar-light container" id="mainNav">
      <NavLink class="navbar-brand" to="/">Resto</NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/menu">Menu</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="#"><i class="fa fa-twitter"></i></NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="#"><i class="fa fa-facebook"></i></NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="#"><i class="fa fa-youtube"></i></NavLink>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;