import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { NotFound } from '../ui/NotFound/NotFound'
import '../scss/index.scss'

const Component = {
  title: 'NotFound',
  component: NotFound
}

export default Component

export const DefaultModal = () => (
  <MemoryRouter>
    <NotFound />
  </MemoryRouter>
)
