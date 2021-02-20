import { Product } from 'hooks/useMenuData/useMenuData.types'
import React from 'react'

import { MenuItem } from '../MenuItem/MenuItem'
import styles from "./MenuList.module.scss"

type Props = {
  category: Product[]
}

export const MenuList = ({category}: Props) => {
  return (
    <ul className={styles.list}>
      {category && category.map((product) => <MenuItem key={product.id} menu={product} />)}
    </ul>
  )
}
