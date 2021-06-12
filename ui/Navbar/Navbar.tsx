import React, { useState } from "react"
import Link from "next/link"

import { Container } from "ui/Container/Container"
import { DEFAULT_LINKS } from "constants/routes"
import { MenuButton } from "../MenuButton/MenuButton"
import { NavList } from "../NavList/NavList"

import styles from "./Navbar.module.scss"

type Link = {
  name: string
  link: string
}

type Props = {
  links?: Array<Link>
  hashlink?: boolean
  withDashboard?: boolean
  admin?: boolean
  children?: React.ReactNode
}

export const Navbar = ({ links = DEFAULT_LINKS, hashlink = false, withDashboard, admin, children }: Props) => {
  const [isNavActive, setIsNavActive] = useState({
    firstRender: true,
    active: false,
  })
  const handleNavbarToggle = () => {
    setIsNavActive({ firstRender: false, active: !isNavActive.active })
  }

  if (admin) {
    return (
      <Container>
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
      </Container>
    )
  }

  return (
    <Container>
      <nav className={styles.nav} id="mainNav" aria-label="Main">
        <Link href="/">
          <a className={styles.link}>
            <h3 className={styles.brand}>Alkinoos Taverna</h3>
          </a>
        </Link>
        <MenuButton toggleNavbar={handleNavbarToggle} />
        <NavList isNavActive={isNavActive} links={links} withDashboard={withDashboard} hashlink={hashlink} />
      </nav>
    </Container>
  )
}
