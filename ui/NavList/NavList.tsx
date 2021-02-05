import React from 'react'
import Link from 'next/link'

import { NavItem } from '../NavItem/NavItem'
import styles from "./NavList.module.scss"

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
          ? styles.active
          : styles.list
      }
    >
      <li className="nav__item">
        <Link href="/">
          <a className="nav__link">
            Home
          </a>
        </Link>
      </li>
      {links.map((link, index) => (
        <NavItem key={index} name={link.name} link={link.link} hashlink={hashlink} />
      ))}
      {withDashboard ? (
        <li className="nav__item">
          <Link href="/admin">
            <a className="nav__link btn btn--light btn--small">Dashboard</a>
          </Link>
        </li>
      ) : null}
      {children}
    </ul>
  )
}
