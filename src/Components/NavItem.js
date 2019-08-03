import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ hashlink, name }) => (
  <li className="nav__item">
    { hashlink ? (
      <HashLink className="nav__link" to={`/#${name}`}>
        {name}
      </HashLink>
    ) : (
      <Link className="nav__link" to={`/${name}`}>
        {name}
      </Link>
    )}
  </li>
);

NavItem.propTypes = {
  name: PropTypes.string,
  hashlink: PropTypes.bool,
};

NavItem.defaultProps = {
  name: 'Home',
  hashlink: false,
};

export default NavItem;
