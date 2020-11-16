import React from 'react'
import { motion } from 'framer-motion'
import { pageTransitions } from '../../constants/config'
import { BookingItem } from '../BookingItem/BookingItem'

type Booking = {
  id: string
  confirmed: boolean
  date: Date
  email: string
  guests: number
  name: string
}

type Props = {
  bookings: Booking[]
  toggleOptions: (booking: any) => void
}

export const BookingsTable = ({ bookings, toggleOptions }: Props) => {
  return (
    <motion.table className="table" variants={pageTransitions}>
      <thead className="table__header">
        <tr className="table__row">
          <th className="table__heading">Name</th>
          <th className="table__heading">Date</th>
          <th className="table__heading">Time</th>
          <th className="table__heading">Email</th>
          <th className="table__heading">Guests</th>
          <th className="table__heading">Options</th>
        </tr>
      </thead>
      <tbody>
        {bookings &&
          bookings.map((item: Booking) => {
            return (
              <BookingItem
                key={item.id}
                name={item.name}
                email={item.email}
                guests={item.guests}
                date={item.date}
                toggleOptions={() => toggleOptions(item)}
              />
            )
          })}
      </tbody>
    </motion.table>
  )
}
