import type { Product } from "types/product"

// export type Category = "appetizers" | "desserts" | "mains" | "salads" | "drinks"
export enum Category {
  Appetizers = 2,
  Desserts = 3,
  Mains = 4,
  Salads = 5,
  Drinks = 6,
}

export const filterCategory = (products: Product[], categoryId: Category) =>
  products.filter((product) => product.category_id === categoryId)

// export const formatMenu = (products: Menu) => {
//   const appetizers = filterCategory(products, "appetizers")
//   const desserts = filterCategory(products, "desserts")
//   const mains = filterCategory(products, "mains")
//   const salads = filterCategory(products, "salads")
//   const drinks = filterCategory(products, "drinks")

//   return {
//     appetizers,
//     desserts,
//     mains,
//     salads,
//     drinks,
//   }
// }
