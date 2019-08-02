import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = props => {
  return (
    <li className="nav__item">
      {props.hashlink ? 
        <HashLink className="nav__link" to={`/#${props.name}`}>
          {props.name}
        </HashLink>
      :
        <Link className="nav__link" to={`/${props.name}`}>
          {props.name}
        </Link>
      }
    </li>
  );
};

NavItem.propTypes = {
  name: PropTypes.string,
  hashlink: PropTypes.bool,
};

export default NavItem;
