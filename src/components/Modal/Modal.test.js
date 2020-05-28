import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRouter } from '../../utils/testUtils'
import Modal from './Modal'

test('Should render Modal component with disabled class', () => {
  const { container } = renderWithRouter(<Modal show={false}><p>test</p></Modal>)
  expect(container.querySelector('.modal-book')).toHaveClass('modal-book--disabled')
})

test('Should render Modal component with active class', () => {
  const { container } = renderWithRouter(<Modal show={true}><p>test</p></Modal>)
  expect(container.querySelector('.modal-book')).toHaveClass('modal-book--active')
})
