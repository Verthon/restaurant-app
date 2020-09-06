/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {mockFirebase} from 'firestore-jest-mock';

import Menu from './Menu'
import { renderWithRouter } from '../../utils/testUtils'
const { mockFirebase } = require('firestore-jest-mock');

test('Should render Menu component', () => {
  const { container } = renderWithRouter(<Menu />)
  const text = 'Menu'
  expect(container.innerHTML).toMatch(text)
})
