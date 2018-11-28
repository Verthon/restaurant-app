import React from 'react';
import HomeMenuItem from './HomeMenuItem';
import {formatPrice} from '../helpers';
import menu from '../menu';
//TODO restructure menu divs with component

const HomeMenu = (props) => {
  return (
    
    <section id="menu" className="section section__menu">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h2 className="menu-section__title">Appetizers</h2>
          <ul className="menu-section__list">
            <HomeMenuItem menu={menu.item1}/>
            <HomeMenuItem menu={menu.item2} />
            <HomeMenuItem menu={menu.item3} />
          </ul>
        </div>
        <div className="col-md-6 col-sm-12">
          <h2 className="menu-section__title">Starters</h2>
          <ul className="menu-section__list">
            <li className="menu-section__item">
              <h3>Haloumi</h3> <span>$3.99</span>
              <p className="menu-section-description">Refreshing traditional cucumber and garlic youghurt dip.</p>
            </li>
            <li className="menu-section__item">
              <h3>Spinach Pie</h3> <span>$5.00</span>
              <p className="menu-section-description">Purred eggplant, garlic, green pepper and tomato dip</p>
            </li>
          </ul>
        </div>

      </div>
      <div className="row">

          <div className="col-md-6 col-sm-12">
            <h2 className="menu-section__title">Salads</h2>
            <ul className="menu-section__list">
              <li className="menu-section__item">
                <h3>Olive special</h3> <span>$3.99</span>
                <p className="menu-section-description">Refreshing traditional cucumber and garlic youghurt dip.</p>
              </li>
              <li className="menu-section__item">
                <h3>Greek salad</h3> <span>$5.00</span>
                <p className="menu-section-description">Purred eggplant, garlic, green pepper and tomato dip</p>
              </li>
              <li className="menu-section__item">
                <h3>Gusto salad</h3> <span>$5.00</span>
                <p className="menu-section-description">Purred eggplant, garlic, green pepper and tomato dip</p>
              </li>
            </ul>
          </div>
  
          <div className="col-md-6 col-sm-12">
            <article className="menu-section__container">
              <h2 className="menu-section__title">Main Dishes</h2>
              <ul className="menu-section__list">
                <li className="menu-section__item">
                  <h3>Cornish mackerel</h3> <span>$8.99</span>
                  <p className="menu-section-description">Refreshing traditional cucumber and garlic youghurt dip.</p>
                </li>
                <li className="menu-section__item">
                  <h3>Roast Lamb</h3> <span>$5.99</span>
                  <p className="menu-section-description">Refreshing traditional cucumber and garlic youghurt dip.</p>
                </li>
                <li className="menu-section__item">
                  <h3>Fried Chicken</h3> <span>$5.20</span>
                  <p className="menu-section-description">Purred eggplant, garlic, green pepper and tomato dip</p>
                </li>
                <li className="menu-section__item">
                  <h3>Pastitsio</h3> <span>$5.70</span>
                  <p className="menu-section-description">Purred eggplant, garlic, green pepper and tomato dip</p>
                </li>
              </ul>
            </article>
          </div>
  
        </div>
    </section>
  );
}

export default HomeMenu;