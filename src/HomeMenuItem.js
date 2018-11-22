import React from 'react';

const HomeMenuItem = (props) => {
  return(
    <div class="col-md-6 col-sm-12">
          <h2 class="menu-section__title">Appetisers</h2>
          <ul class="menu-section__list">
            <li class="menu-section__item">
              <h3>Tzatsiki</h3> <span>$3.99</span>
              <p class="menu-section-description">Refreshing traditional cucumber and garlic youghurt dip.</p>
            </li>
            <li class="menu-section__item">
              <h3>Aubergine salad</h3> <span>$5.00</span>
              <p class="menu-section-description">Purred eggplant, garlic, green pepper and tomato dip</p>
            </li>
            <li class="menu-section__item">
              <h3>Cesar salad</h3> <span>$6.00</span>
              <p class="menu-section-description">Grilled chicken, garlic, red pepper, youghurt dip</p>
            </li>
          </ul>
        </div>
  );
}

export default HomeMenuItem;