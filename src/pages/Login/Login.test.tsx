/* eslint-disable no-unused-vars */
import React from 'react'
import {screen} from '@testing-library/react'
import Login from './Login'
import { UserContext } from '../../components/UserContext'
import { renderWithRouter } from '../../utils/testUtils'

jest.mock('../../firebase', () => ({
  firebase: {
    auth: jest.fn(() => {})
  }
}))
test('Should render Login component', () => {
  const { container } = renderWithRouter(<UserContext.Provider value={{}}><Login/></UserContext.Provider>)
  const text = 'Login'
  expect(container.getByText(text)).toBeInTheDocument()
})
