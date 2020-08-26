import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { MenuButton } from '../MenuButton/MenuButton'
import { NavList } from '../NavList/NavList'

import './Navbar.scss'

type Link = {
  name: string
  link: string
}

type Props = {
  links: Array<Link>
  hashlink: boolean
  withDashboard?: boolean
  admin?: boolean
}

export const Navbar: React.FC<Props> = ({ links, hashlink, withDashboard, admin, children }) => {
  const [isNavActive, setIsNavActive] = useState({
    firstRender: true,
    active: false
  })
  const handleNavbarToggle = () => {
    setIsNavActive({ firstRender: false, active: !isNavActive.active })
  }

  if (admin) {
    return (
      <nav className="nav container" id="mainNav" aria-label="Main">
        <NavLink className="nav__link" to="/">
          <h3 className="navbar__brand">Alkinoos Taverna</h3>
        </NavLink>
        <MenuButton toggleNavbar={handleNavbarToggle} />
        <NavList isNavActive={isNavActive} links={links} withDashboard={withDashboard} hashlink={hashlink}>
          <li className="nav__item">{children}</li>
        </NavList>
      </nav>
    )
  }

  return (
    <nav className="nav container" id="mainNav" aria-label="Main">
      <NavLink className="nav__link" to="/">
        <h3 className="navbar__brand">Alkinoos Taverna</h3>
      </NavLink>
      <MenuButton toggleNavbar={handleNavbarToggle} />
      <NavList isNavActive={isNavActive} links={links} withDashboard={withDashboard} hashlink={hashlink}/>
    </nav>
  )
}
