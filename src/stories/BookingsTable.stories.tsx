import React from 'react'

import { BookingsTable } from '../ui/BookingsTable/BookingsTable'
import '../scss/index.scss'

const Component = {
  title: 'BookingsTable',
  component: BookingsTable
}

export default Component

const toggleOptions = () => console.log('test')

const bookings = [
  {
    id: 1,
    confirmed: false,
    name: 'Bill Gates',
    email: 'gates@test.pl',
    date: new Date(),
    guests: 1
  },
  {
    id: 2,
    confirmed: false,
    name: 'Donald Trump',
    email: 'trump@test.pl',
    date: new Date(),
    guests: 2
  }
]

export const DefaultBookingsTable = () => <BookingsTable bookings={bookings} toggleOptions={toggleOptions} />
