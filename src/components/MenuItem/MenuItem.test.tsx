import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import MenuItem from './MenuItem'
import { renderWithRouter } from '../../utils/testUtils'

test('Should render MenuItem component with given props', () => {
  const props = {
    name: 'Tzatziki',
    price: 390,
    desc: 'Refreshing traditional cucumber and garlic yoghurt dip'
  }
  const { container } = renderWithRouter(<MenuItem menu={props} />)
  expect(container.innerHTML).toMatch(props.name, props.desc, props.price)
})
