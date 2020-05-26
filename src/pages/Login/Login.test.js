import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Login from './Login.js'
import { renderWithRouter } from '../../utils/testUtils'

test('Should render Login component', () => {
  const { container } = renderWithRouter(<Login/>)
  const text = 'Login'
  expect(container.innerHTML).toMatch(text)
})
