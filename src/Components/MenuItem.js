import React, {Fragment} from 'react';
import {formatPrice} from '../helpers';

const MenuItem = (props) => {
  //Destructing the object menu

  const {name, price, desc} = props.menu;

  return (
          <Fragment>
            <li className="menu-section__item">
              <h3>{name}</h3> <span>{formatPrice(price)}</span>
              <p className="menu-section-description">{desc}</p>
              <button className="site-header__btn">Add to the order</button>
            </li>
          </Fragment>
  );
}

export default MenuItem;