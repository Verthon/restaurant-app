import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import NavItem from './NavItem/NavItem'

const Navbar = ({ links, hashlink, withDashboard }) => {
  const [isNavActive, setIsNavActive] = useState({
    firstRender: true,
    active: false
  })
  const handleNavbarToggle = () => {
    setIsNavActive({ firstRender: false, active: !isNavActive.active })
  }

  return (
    <nav className="nav container" id="mainNav" aria-label="Main">
      <NavLink className="nav__link" to="/">
        <h3 className="navbar__brand">Alkinoos Taverna</h3>
      </NavLink>
      <button
        className="nav__btn"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleNavbarToggle}
      >
        <span className="btn__line" />
        <span className="btn__line" />
        <span className="btn__line" />
      </button>
      <ul
        className={
          isNavActive.active && !isNavActive.firstRender
            ? 'nav__list--active animate__animated animate__fadeInLeft'
            : 'nav__list'
        }
      >
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
        </li>
        {links.map((link, index) => (
          <NavItem
            key={index}
            name={link.name}
            link={link.link}
            hashlink={hashlink}
          />
        ))}
        {withDashboard ? (
          <li className="nav__item">
            <NavLink
              to="/admin"
              className="nav__link btn btn--light btn--small"
            >
              Dashboard
            </NavLink>
          </li>
        ) : null}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    })
  ),
  hashlink: PropTypes.bool,
  withDashboard: PropTypes.bool
}

Navbar.defaultProps = {
  links: [
    { name: 'Menu', link: 'menu' },
    { name: 'Book Table', link: 'book-table' }
  ],
  hashlink: false
}

export default Navbar
