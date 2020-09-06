import React from 'react';

import { useMenuData } from '../../hooks/useMenuData/useMenuData';
import { Menu } from './Menu';

export const MenuContainer = () => {
  const { menu, isLoading } = useMenuData()
  return (
    <Menu isLoading={isLoading} menu={menu}/>
  );
};