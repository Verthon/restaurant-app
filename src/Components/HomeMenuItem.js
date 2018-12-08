import React from 'react';

const HomeMenuItem = (props) => {
  return(
    <div className="col-md-6 col-sm-12">
          <h2 className="menu-section__title">Appetisers</h2>
          <ul className="menu-section__list">
            <li className="menu-section__item">
              <h3>Tzatsiki</h3> <span>$3.99</span>
              <p className="menu-section-description">Refreshing traditional cucumber and garlic youghurt dip.</p>
            </li>
            <li className="menu-section__item">
              <h3>Aubergine salad</h3> <span>$5.00</span>
              <p className="menu-section-description">Purred eggplant, garlic, green pepper and tomato dip</p>
            </li>
            <li className="menu-section__item">
              <h3>Cesar salad</h3> <span>$6.00</span>
              <p className="menu-section-description">Grilled chicken, garlic, red pepper, youghurt dip</p>
            </li>
          </ul>
        </div>
  );
}

export default HomeMenuItem;