/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Menu from './Menu'
import { renderWithRouter } from '../../utils/testUtils'

jest.mock('../../firebase', () => {
  db: {
    collection: jest.fn(() => Promise.resolve('test'))
  }
})
const docData = { data: 'MOCK_DATA' }
const docResult = {
  // simulate firestore get doc.data() function
  data: () => docData
}
const get = jest.fn(() => Promise.resolve(docResult))
const set = jest.fn()
const doc = jest.fn(() => {
  return {
    set,
    get
  }
})
const firestore = () => {
  return { doc }
}
firestore.FieldValue = {
  serverTimestamp: () => {
    return 'MOCK_TIME'
  }
}

test('Should render Menu component', () => {
  const { container } = renderWithRouter(<Menu />)
  const text = 'Menu'
  expect(container.innerHTML).toMatch(text)
})
