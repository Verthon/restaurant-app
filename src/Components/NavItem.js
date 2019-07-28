import React from 'react';
import { HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const navitem = props => {
  return (
    props.hashlink ? 
    <li className="nav__item">
      <HashLink className="nav__link" to={`/#${props.name}`}>
        {props.name}
      </HashLink>
    </li> :
    <li className="nav__item">
    <Link className="nav__link" to={`/${props.name}`}>
      {props.name}
    </Link>
    </li>
  );
};

export default navitem;
