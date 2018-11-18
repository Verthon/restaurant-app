import React from 'react';
import{Link} from 'react-router-dom';

const navitem = (props) => {
  return(
    <li className="nav-item">
      <Link className="nav-link" to="#"><i className="fa fa-youtube"></i></Link>
    </li>
  )
  
}

export default navitem;