import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

const MenuItem = props => {
  //Destructing the object menu
  const { name, price, desc } = props.menu;

  return (
    <Fragment>
      <li className="menu__item">
        <header className="menu__header">
          <h3 className="menu__item__name">{name}</h3>{' '}
          <span className="menu__item__price">{formatPrice(price)}</span>
        </header>
        <p className="menu__description">{desc}</p>
      </li>
    </Fragment>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default MenuItem;
