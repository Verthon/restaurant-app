import { createContext } from 'react'
import { Auth } from './AuthContext.types'

export const AuthStateContext = createContext<Auth | undefined>(undefined)
export const AuthDispatchContext = createContext<Auth | undefined>(undefined)