import { createContext } from 'react'
import { BookingData } from './BookingDataContext.types'

export const BookingDataContext = createContext<BookingData | undefined>(undefined!)
