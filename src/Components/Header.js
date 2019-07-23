import React from 'react';
import headerImg from '../images/header-xs.jpg';

const Header = props => {
  return (
    <header className="site-header">
      {props.children}
      <div className="site_header__image">
        <picture>
          <source media="(min-width: )" srcSet="" sizes="" />
          <img src={headerImg} alt="" />
        </picture>
      </div>
      <div className="site-header__content">
        <h1 className="site-header__headline" data-aos="fade">
          Alkinoos Taverna
        </h1>
        <p className="site-header__text" data-aos="fade-up" data-delay="500">
          The right ingredients for the right food. Mediterranean Cuisine with
          long tradition.
        </p>

        <button className="btn btn__dark">
          <a href="/book-table">book a table</a>
        </button>

        <button className="btn btn__light">
          <a href="/menu">see the menu</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
