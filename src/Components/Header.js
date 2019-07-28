import React from 'react';
import headerImgXs from '../images/header-xs.jpg';
import headerImgSm from '../images/header-sm.jpg';

const Header = props => {
  return (
    <header className="site-header">
      <div className="site-header__image">
        <picture>
          <source media="(min-width: 758px)" srcSet={headerImgSm} sizes="" />
          <img src={headerImgXs} alt="" />
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
        <div className="site-header__buttons">
          <button className="btn btn--dark">
            <a href="/book-table">book a table</a>
          </button>
          <button className="btn btn--light">
            <a href="/menu">see the menu</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
