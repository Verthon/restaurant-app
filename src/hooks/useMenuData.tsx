import { useState, useEffect } from 'react'
import { formatMenu } from '../utils/helpers'
import { useGetCollection } from './useGetCollection'

export const useMenuData = () => {
  const [menu, setMenu] = useState([])
  const { isLoading, data } = useGetCollection({ collectionName: 'menu' })
  useEffect(() => {
    const formattedMenu = formatMenu(data)
    setMenu(formattedMenu)
  }, [isLoading, data])
  return {
    menu,
    isLoading
  }
}
