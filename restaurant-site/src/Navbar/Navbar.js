import React from 'react';

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container" id="mainNav">
      <a class="navbar-brand" href="#home">Resto</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ingredients">Ingredients</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#menu">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#reviews">Reviews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa fa-youtube"></i></a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;