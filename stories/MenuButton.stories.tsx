import React, { useState } from 'react'

import { MenuButton } from '../ui/MenuButton/MenuButton'
import '../scss/index.scss'

const Component = {
  title: 'MenuButton',
  component: MenuButton
}

export default Component

const mobileWrapper = {
  maxWidth: '320px',
  margin: 'auto'
}

export const HamburgerButton = () => {
  const [isNavActive, setIsNavActive] = useState({
    firstRender: true,
    active: false
  })
  const handleNavbarToggle = () => {
    setIsNavActive({ firstRender: false, active: !isNavActive.active })
  }

  return (
    <div style={mobileWrapper}>
      <MenuButton toggleNavbar={handleNavbarToggle} />
    </div>
  )
}
