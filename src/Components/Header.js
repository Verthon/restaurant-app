import React from 'react';

const Header  = (props) => {
  return (
    <header className="site-header">
      {props.children}
      <div className="site-header__content">
        <h1 className="site-header__headline">
          Alkinoos Taverna
        </h1>
        <p className="site-header__text">
        The right ingredients for the right food
        </p>
        <a href="/book-table"><button className="site-header__btn">book a table</button></a>
        <a href="/menu"><button className="site-header__btn site-header__btn--reverse">see the menu</button></a>
      </div>
    </header>
  );
}

export default Header;