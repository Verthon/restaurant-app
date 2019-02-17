import React from 'react';
import{HashLink as Link} from 'react-router-hash-link';

const navitem = (props) => {
  return(
    <li className="nav-item">
      <Link className="nav-link" to={`/#${props.name}`}>{props.name}</Link>
    </li>
  ); 
}

export default navitem;