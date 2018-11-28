import React, {Fragment} from 'react';

const HomeMenuItem = (props) => {
  console.log(props.menu);
  return (
          <Fragment>
            <li className="menu-section__item">
              <h3>{props.menu.name}</h3> <span>{props.menu.price}</span>
              <p className="menu-section-description">{props.menu.desc}</p>
            </li>
          </Fragment>
  );
}

export default HomeMenuItem;