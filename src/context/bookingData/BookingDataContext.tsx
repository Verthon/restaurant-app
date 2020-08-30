import { createContext } from 'react'
import { Props } from './BookingDataContext.types'
import { INITIAL_BOOKING_STATE } from '../../constants/booking'

export const BookingDataContext = createContext<Props | undefined>(undefined)
