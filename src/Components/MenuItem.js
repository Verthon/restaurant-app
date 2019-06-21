import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

const MenuItem = props => {
  //Destructing the object menu
  const { name, price, desc } = props.menu;

  return (
    <Fragment>
      <li className="menu-section__item">
        <h3>{name}</h3> <span>{formatPrice(price)}</span>
        <p className="menu-section-description">{desc}</p>
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
