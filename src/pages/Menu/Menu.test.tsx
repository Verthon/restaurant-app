/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { Menu } from './Menu'
import { renderWithRouter } from '../../utils/testUtils'

test('Should render Menu component', () => {
  const { container } = renderWithRouter(<Menu isLoading={true} />)
  const text = 'Menu'
  expect(container.innerHTML).toMatch(text)
})
