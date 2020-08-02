import { createContext } from 'react'

type Props = {
  state: any
  dispatch?: React.Dispatch<any>
}

const contextData: Props = {
  state: {}
}

export const DataContext = createContext(contextData)
