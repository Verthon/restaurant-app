import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavItem = ({ hashlink, name, link }) => (
  <li className='nav__item'>
    {hashlink ? (
      <HashLink className='nav__link' data-testid="navlink" to={`#${link}`}>
        {name}
      </HashLink>
    ) : (
      <NavLink className='nav__link' data-testid="navlink" activeClassName="nav__link--active" to={`/${link}`}>
        {name}
      </NavLink>
    )}
  </li>
)

NavItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  hashlink: PropTypes.bool
}

NavItem.defaultProps = {
  name: 'Home',
  link: '/',
  hashlink: false
}

export default NavItem
