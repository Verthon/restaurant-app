import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { getByTestId } from '@testing-library/react'
import { renderWithRouter } from '../../utils/testUtils'
import NavItem from './NavItem'

test('Should render NavItem with hash links', () => {
  const props = { hashlink: true, name: 'Menu', link: 'menu' }
  const link = getByTestId('navlink')
  const { container } = renderWithRouter(
    <NavItem name={props.name} link={props.link} />
  )
  expect(link).toHaveAttribute('href')
})

// test('Should render NavItem component without hash links', () => {
//   const { container } = renderWithRouter(<NavItem show={true} />)
//   expect(link).toHaveClass('nav__link')
// })
