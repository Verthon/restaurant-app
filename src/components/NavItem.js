import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavItem = ({ hashlink, name, link }) => (
  <li className='nav__item'>
    {hashlink ? (
      <HashLink className='nav__link' to={`/#${link}`}>
        {name}
      </HashLink>
    ) : (
      <Link className='nav__link' to={`/${link}`}>
        {name}
      </Link>
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
