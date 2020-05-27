/* eslint-disable no-unused-vars */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Login from './Login.js'
import { UserContext } from '../../components/UserContext'
import { renderWithRouter } from '../../utils/testUtils'

jest.mock('../../firebase', () => ({
  firebase: {
    auth: jest.fn(() => {})
  }
}))
test('Should render Login component', () => {
  const { container } = renderWithRouter(<UserContext.Provider value="y"><Login/></UserContext.Provider>)
  const text = 'Login'
  expect(container.innerHTML).toMatch(text)
})
