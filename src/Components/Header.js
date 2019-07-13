import React from 'react';

const Header = props => {
  return (
    <header className="site-header">
      {props.children}
      <div className="site-header__content">
        <h1 className="site-header__headline" data-aos="fade">Alkinoos Taverna</h1>
        <p className="site-header__text" data-aos="fade-up" data-delay="500">
          The right ingredients for the right food.
          Mediterranean Cuisine with long tradition.
        </p>
        <a href="/book-table">
          <button className="site-header__btn">book a table</button>
        </a>
        <a href="/menu">
          <button className="site-header__btn site-header__btn--reverse">
            see the menu
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
