import React from 'react'
import '@testing-library/jest-dom/extend-expect'
// import { getByRole } from '@testing-library/react'
import { renderWithRouter } from '../../utils/testUtils'
import NavItem from './NavItem'

test('Should render NavItem with hash links', () => {
  const props = { hashlink: true, name: 'Menu', link: 'menu' }
  const { container } = renderWithRouter(
    <NavItem name={props.name} link={props.link} hashlink={props.hashlink}/>
  )
  const link = container.querySelector('[data-testid="navlink"]')
  expect(container).toBeInTheDocument()
  expect(link).toHaveAttribute('href')
  expect(link).toContainHTML('<a class="nav__link" data-testid="navlink" href="/#menu">Menu</a>')
})

test('Should render NavItem with hash links', () => {
  const props = { hashlink: false, name: 'Menu', link: 'menu' }
  const { container } = renderWithRouter(
    <NavItem name={props.name} link={props.link} hashlink={props.hashlink}/>
  )
  const link = container.querySelector('[data-testid="navlink"]')
  expect(container).toBeInTheDocument()
  expect(link).toHaveAttribute('href')
  expect(link).toContainHTML('<a class="nav__link" data-testid="navlink" href="/menu">Menu</a>')
})
