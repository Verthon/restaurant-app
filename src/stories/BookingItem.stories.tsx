import React from 'react'

import { BookingItem } from '../ui/BookingItem/BookingItem'
import '../scss/index.scss'

const Component = {
  title: 'BookingItem',
  component: BookingItem
}

export default Component

const props = {
  name: 'Bill Gates',
  email: 'gates@test.pl',
  date: new Date(),
  guests: 1,
  toggleOptions: () => console.log('test')
}

const {name, email, date, guests, toggleOptions} = props

export const DefaultBookingItem = () => <BookingItem name={name} email={email} date={date} guests={guests} toggleOptions={toggleOptions}/>