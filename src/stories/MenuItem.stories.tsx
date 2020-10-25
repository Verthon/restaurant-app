import React from 'react'

import { MenuItem } from '../ui/MenuItem/MenuItem'
import '../scss/index.scss'

const Component = {
  title: 'MenuItem',
  component: MenuItem
}

export default Component

const menu = {
  name: 'Moussaka',
  price: 1200,
  description: 'Layers of cooked aubergine slices alternating with minced meat, covered with a thick béchamel sauce.'
}

export const DefaultMenuItem = () => (
  <div className="container">
    <article className="menu__container">
      <MenuItem menu={menu} />
    </article>
  </div>
)
