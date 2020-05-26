import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import NotFound from './NotFound'
import { renderWithRouter } from '../../utils/testUtils'

test('Should render NotFound component', () => {
  const { container } = renderWithRouter(<NotFound/>)
  const text = '404 not found in database'
  expect(container.innerHTML).toMatch(text)
})
