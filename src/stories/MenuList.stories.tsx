import React from 'react'

import { MenuList } from '../ui/MenuList/MenuList'
import '../scss/index.scss'

export default {
  title: 'MenuList',
  component: MenuList
}

const category = {
  id: 'Appetizers',
  data: {
    data: [
      {
        name: 'Tzatziki',
        price: 750,
        description:
          'Refreshing traditional cucumber and garlic yogurt dip. Seasoned with fresh, local herbs.'
      },
      {
        name: 'Keftedakia',
        price: 1600,
        description:
          'Bite size, beef or lamb meatballs seasoned with fresh Greek herbs.'
      },
      {
        name: 'Saganaki',
        price: 1500,
        description:
          'Fried traditional Greek cheese - Graviera with light hint of lemon and garlic.'
      },
    ]
  }
}

export const DefaultMenuList = () => (
  <div className="container">
    <MenuList category={category} />
  </div>
)
