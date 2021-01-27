import { Menu } from '../pages/Menu/Menu.types'

export const formatMenu = (products: Menu) => {
  const appetizers = products.filter(product => product.category.name === "appetizers")
  const desserts = products.filter(product => product.category.name === "desserts")
  const mains = products.filter(product => product.category.name === "mains")
  const salads = products.filter(product => product.category.name === "salads")
  const drinks = products.filter(product => product.category.name === "drinks")

  return {
    appetizers,
    desserts,
    mains,
    salads,
    drinks
  }
}