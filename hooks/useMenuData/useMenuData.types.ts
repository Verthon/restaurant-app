export type Category = {
  id: number
  name: string
}

export type Product = {
  id: number
  name: string
  price: number
  description: string
  category_id: number
  category: Category
}

export type Props = {
  isLoading: boolean
  appetizers: Product[]
  desserts: Product[]
  mains: Product[]
  salads: Product[]
}

export type Menu = Product[]

export type MenuState = {
  appetizers: Product[]
  desserts: Product[]
  mains: Product[]
  salads: Product[]
  drinks: Product[]
}
