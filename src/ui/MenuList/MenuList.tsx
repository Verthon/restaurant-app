import React from 'react'

import { MenuItem } from '../MenuItem/MenuItem'

type MenuData = {
  description: string
  name: string
  price: number
}

type MenuCategory = {
  id: string
  data: {
    data: Array<MenuData>
  }
}

type Props = {
  category: MenuCategory
}

export const MenuList = ({category}: Props) => {
  return (
    <ul className="menu__list">
      {category.data.data && category.data.data.map((item: MenuData) => <MenuItem key={item.name} menu={item} />)}
    </ul>
  )
}
