import React from 'react'

import { MenuList } from '../ui/MenuList/MenuList'
import '../scss/index.scss'

const Component = {
  title: 'MenuList',
  component: MenuList
}

export default Component

const category = [
  {
    id: 1,
    name: 'Tzatziki',
    price: 750,
    description: 'Refreshing traditional cucumber and garlic yogurt dip. Seasoned with fresh, local herbs.',
    category_id: 1,
    category: {
      id: 1,
      name: 'appetizers'
    }
  },
  {
    id: 2,
    name: 'Keftedakia',
    price: 1600,
    description: 'Bite size, beef or lamb meatballs seasoned with fresh Greek herbs.',
    category_id: 1,
    category: {
      id: 1,
      name: 'appetizers'
    }
  },
  {
    id: 3,
    name: 'Saganaki',
    price: 1500,
    description: 'Fried traditional Greek cheese - Graviera with light hint of lemon and garlic.',
    category_id: 1,
    category: {
      id: 1,
      name: 'appetizers'
    }
  }
]

export const DefaultMenuList = () => (
  <div className="container">
    <MenuList category={category} />
  </div>
)
