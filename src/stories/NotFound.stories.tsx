import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { NotFound } from '../ui/NotFound/NotFound'
import '../scss/index.scss'

export default {
  title: 'NotFound',
  component: NotFound
}

export const DefaultModal = () => (
  <MemoryRouter>
    <NotFound />
  </MemoryRouter>
)
