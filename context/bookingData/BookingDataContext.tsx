import { createContext } from 'react'
import { BookingData } from './BookingDataContext.types'


export const BookingDataState = createContext<BookingData | undefined>(undefined)
export const BookingDataDispatch = createContext(undefined);
