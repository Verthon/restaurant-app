/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Menu from './Menu.js'
import { renderWithRouter } from '../../utils/testUtils'

jest.mock('../../firebase', () => {
  db: {
    collection: jest.fn(() => Promise.resolve())
  }
})

test('Should render Menu component', () => {
  const { container } = renderWithRouter(<Menu />)
  const text = 'Menu'
  expect(container.innerHTML).toMatch(text)
})
