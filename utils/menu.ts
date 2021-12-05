import type { Product } from "types/product"

export enum Category {
  Appetizers = 2,
  Desserts = 3,
  Mains = 4,
  Salads = 5,
  Drinks = 6,
}

export const filterCategory = (products: Product[], categoryId: Category) => {
  return products.filter((product) => product.category_id === categoryId)
}
