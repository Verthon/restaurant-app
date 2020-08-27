import { createContext } from 'react'
import { COMPANY_DATA, COMPANY_DATA_TYPE } from '../constants/companyData';

type Props = {
  state: {
    booking: {
      date: Date
      guests: number
      name: string
      email: string
      confirmed: boolean
      send: boolean
    },
    company: COMPANY_DATA_TYPE
  },
  dispatch?: React.Dispatch<any>
};

export const contextData: Props = {
  state: {
    booking: {
      date: new Date(),
      guests: 1,
      name: 'John Doe',
      email: 'johndoe@xx.ox',
      confirmed: false,
      send: false
    },
    company: COMPANY_DATA,
  }
}

export const DataContext = createContext(contextData)
