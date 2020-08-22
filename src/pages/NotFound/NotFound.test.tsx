import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRouter } from '../../utils/testUtils'
import { NotFound } from '../../ui/NotFound/NotFound'

test('Should render NotFound component', () => {
  const { getByText } = renderWithRouter(<NotFound/>)
  const text = '404 not found in database'
  expect(getByText(text)).toBeInTheDocument();
})
