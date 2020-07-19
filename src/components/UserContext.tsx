import { createContext } from 'react'

type Props = {
  user?: any; 
  setUser?: React.Dispatch<any>
}

const contextData: Props = {
  user: {},
  setUser: undefined
}

export const UserContext = createContext(contextData)
