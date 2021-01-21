import { Product } from "../../pages/Menu/Menu.types"

export type MenuState = {
  appetizers: Product[];
  desserts: Product[];
  mains: Product[];
  salads: Product[];
  drinks: Product[];
}