import { gql, useQuery } from "@apollo/client"
import { useState, useEffect } from "react"

import { formatMenu } from "utils/menu"
import { MenuState } from "./useMenuData.types"

export const FETCH_MENU = gql`
  query getMenu {
    products {
      price
      name
      id
      description
      category_id
      category {
        id
        name
      }
    }
  }
`

export const useMenuData = () => {
  const { data, loading, error, refetch } = useQuery(FETCH_MENU)
  const INITIAL_STATE = {
    appetizers: [],
    desserts: [],
    mains: [],
    salads: [],
    drinks: [],
  }
  const [menu, setMenu] = useState<MenuState>(INITIAL_STATE)
  useEffect(() => {
    if (data?.products) {
      const formattedMenu = formatMenu(data?.products)
      setMenu(formattedMenu)
    }
  }, [data, loading])
  return {
    menu,
    loading,
    error,
    refetch,
  }
}
