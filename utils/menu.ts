import { Menu } from "hooks/useMenuData/useMenuData.types"

type Category = "appetizers" | "desserts" | "mains" | "salads" | "drinks"

const filterCategory = (products: Menu, category: Category) =>
  products.filter((product) => product.category.name === category)

export const formatMenu = (products: Menu) => {
  const appetizers = filterCategory(products, "appetizers")
  const desserts = filterCategory(products, "desserts")
  const mains = filterCategory(products, "mains")
  const salads = filterCategory(products, "salads")
  const drinks = filterCategory(products, "drinks")

  return {
    appetizers,
    desserts,
    mains,
    salads,
    drinks,
  }
}
