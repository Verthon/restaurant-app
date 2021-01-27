import React from 'react'

import { useMenuData } from '../../hooks/useMenuData/useMenuData'
import { Menu } from './Menu'

export const MenuContainer = () => {
  const { menu, loading, error, refetch } = useMenuData()
  const { appetizers, desserts, mains, salads } = menu
  return <Menu isLoading={loading} appetizers={appetizers} desserts={desserts} mains={mains} salads={salads} refetch={refetch} error={error} />
}
