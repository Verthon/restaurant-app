import React from 'react';

const headercontent = (props) => {
  return (
    <div className="site-header__content">
      <h1 className="site-header__headline heading heading--large">
        the right ingredients for the right food
      </h1>
      <a href="/book-table"><button className="site-header__btn">book a table</button></a>
      <a href="/menu"><button className="site-header__btn site-header__btn--reverse">see the menu</button></a>
    </div>
  );
}

export default headercontent;