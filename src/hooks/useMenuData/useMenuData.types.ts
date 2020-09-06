export type MenuData = {
  description: string
  name: string
  price: number
}

export type MenuCategory = {
  id: string
  data: {
    data: Array<MenuData>
  }
}

export type MenuState = Array<MenuCategory>