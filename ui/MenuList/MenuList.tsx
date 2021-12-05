import * as React from "react"

import { Category, filterCategory } from "utils/menu"
import type { Product } from "types/product"
import { Spinner } from "ui/Spinner/Spinner"

import { MenuItem } from "../MenuItem/MenuItem"
import styles from "./MenuList.module.scss"

type Props = {
  products?: Product[] | null
  category: Category.Appetizers | Category.Desserts | Category.Drinks | Category.Mains | Category.Salads
  isLoading: boolean
  isError: boolean
}

export const MenuList = ({ products, category, isLoading, isError }: Props) => {
  const filteredProducts = products ? filterCategory(products, category) : null
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <p>Something went wrong, please try again</p>
  }
  return (
    <ul className={styles.list}>
      {filteredProducts ? filteredProducts.map((product) => <MenuItem key={product.id} menu={product} />) : null}
    </ul>
  )
}
