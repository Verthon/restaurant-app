import React, {Fragment} from 'react';

const HomeMenuItem = (props) => {
  return (
          <Fragment>
            <li className="menu-section__item">
              <h3>{props.name}</h3> <span>{props.price}</span>
              <p className="menu-section-description">{props.desc}</p>
            </li>
          </Fragment>
  );
}

export default HomeMenuItem;