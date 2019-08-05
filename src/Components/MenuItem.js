import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

const MenuItem = ({ menu }) => {
  const { name, price, desc } = menu;

  return (
    <Fragment>
      <li className="menu__item">
        <header className="menu__header">
          <h3 className="menu__item__name">{name}</h3>{' '}
          <span className="menu__item__price">{formatPrice(price)}</span>
        </header>
        <p className="text menu__description">{desc}</p>
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

MenuItem.defaultProps = {
  menu: PropTypes.shape({
    name: 'Baklava',
    desc: 'The best cake in the world',
    price: '14.66',
  }),
};

export default MenuItem;
