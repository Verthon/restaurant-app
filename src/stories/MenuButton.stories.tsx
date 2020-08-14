import React, { useState } from 'react'

import { MenuButton } from '../ui/MenuButton/MenuButton'
import '../scss/index.scss'

export default {
  title: 'MenuButton',
  component: MenuButton
}

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
