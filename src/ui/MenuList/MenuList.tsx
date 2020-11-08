import React from 'react'
import { Product } from '../../pages/Menu/Menu.types'

import { MenuItem } from '../MenuItem/MenuItem'

type Props = {
  category: Product[]
}

export const MenuList = ({category}: Props) => {
  return (
    <ul className="menu__list">
      {category && category.map((product) => <MenuItem key={product.id} menu={product} />)}
    </ul>
  )
}
