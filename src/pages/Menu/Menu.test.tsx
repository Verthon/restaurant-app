/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
const { mockFirebase } = require('firestore-jest-mock');

import Menu from './Menu'
import { renderWithRouter } from '../../utils/testUtils'

test('Should render Menu component', () => {
  const { container } = renderWithRouter(<Menu />)
  const text = 'Menu'
  expect(container.innerHTML).toMatch(text)
})
