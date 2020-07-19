import { useState, useEffect } from 'react'
import { formatMenu } from '../utils/helpers'
import { useGetCollection } from './useGetCollection'

type MenuData = {
  description: string,
  name: string,
  price: number
}

type MenuCategory = {
  id: string,
  data: {
    data: Array<MenuData>
  }
}

type MenuState = Array<MenuCategory>

export const useMenuData = () => {
  const [menu, setMenu] = useState<MenuState>([])
  const { isLoading, data } = useGetCollection({ collectionName: 'menu' })
  useEffect(() => {
    const formattedMenu: MenuState = formatMenu(data)
    setMenu(formattedMenu)
  }, [isLoading, data])
  return {
    menu,
    isLoading
  }
}
