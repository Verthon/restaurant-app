import React from 'react'

import { BookingsTable } from '../ui/BookingsTable/BookingsTable'
import '../scss/index.scss'

export default {
  title: 'BookingsTable',
  component: BookingsTable
}

const toggleOptions = () => console.log('test')

const bookings = [
  {
    id: 'gates',
    data: {
      confirmed: false,
      name: 'Bill Gates',
      email: 'gates@test.pl',
      date: new Date(),
      guests: 1
    }
  },
  {
    id: 'trump',
    data: {
      confirmed: false,
      name: 'Donald Trump',
      email: 'trump@test.pl',
      date: new Date(),
      guests: 2
    }
  }
]

export const DefaultBookingsTable = () => <BookingsTable bookings={bookings} toggleOptions={toggleOptions} />
