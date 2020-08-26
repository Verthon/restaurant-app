import React from 'react'
import {NavLink} from 'react-router-dom'

import { NavItem } from '../NavItem/NavItem'

type Link = {
  name: string
  link: string
}

type Props = {
  links: Array<Link>
  hashlink: boolean
  withDashboard?: boolean
  admin?: boolean,
  isNavActive: {
    firstRender: boolean;
    active: boolean;
  },
  children?: React.ReactNode
}

export const NavList = ({isNavActive, links, withDashboard, hashlink, children }: Props) => {
  return (
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
        <NavItem key={index} name={link.name} link={link.link} hashlink={hashlink} />
      ))}
      {withDashboard ? (
        <li className="nav__item">
          <NavLink to="/admin" className="nav__link btn btn--light btn--small">
            Dashboard
          </NavLink>
        </li>
      ) : null}
      {children}
    </ul>
  )
}
