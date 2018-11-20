import React from 'react';
import {Link} from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark container" id="mainNav">
      <Link class="navbar-brand" to="/">Resto</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#ingredients">Ingredients</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#menu">Menu</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#reviews">Reviews</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#"><i class="fa fa-twitter"></i></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#"><i class="fa fa-facebook"></i></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#"><i class="fa fa-youtube"></i></Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavbar;