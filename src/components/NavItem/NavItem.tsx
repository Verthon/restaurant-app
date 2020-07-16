import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'

type Props = { hashlink: boolean; name: string; link: string }

const NavItem: React.FC<Props> = ({ hashlink, name, link }) => (
  <li className="nav__item">
    {hashlink ? (
      <HashLink className="nav__link" data-testid="navlink" to={`#${link}`}>
        {name}
      </HashLink>
    ) : (
      <NavLink
        className="nav__link"
        data-testid="navlink"
        activeClassName="nav__link--active"
        to={`/${link}`}
      >
        {name}
      </NavLink>
    )}
  </li>
)

export default NavItem
