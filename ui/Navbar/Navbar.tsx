import React, { useState } from 'react'
import Link from 'next/link'

import { MenuButton } from '../MenuButton/MenuButton'
import { NavList } from '../NavList/NavList'

import styles from "./Navbar.module.scss"

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
      <nav className={styles.nav} id="mainNav" aria-label="Main">
        <Link href="/">
          <a className={styles.link}>
            <h3 className={styles.brand}>Alkinoos Taverna</h3>
          </a>
        </Link>
        <MenuButton toggleNavbar={handleNavbarToggle} />
        <NavList isNavActive={isNavActive} links={links} withDashboard={withDashboard} hashlink={hashlink}>
          <li className={styles.link}>{children}</li>
        </NavList>
      </nav>
    )
  }

  return (
    <nav className={styles.nav} id="mainNav" aria-label="Main">
      <Link href="/">
        <a className={styles.link}>
          <h3 className={styles.brand}>Alkinoos Taverna</h3>
        </a>
      </Link>
      <MenuButton toggleNavbar={handleNavbarToggle} />
      <NavList isNavActive={isNavActive} links={links} withDashboard={withDashboard} hashlink={hashlink}/>
    </nav>
  )
}
