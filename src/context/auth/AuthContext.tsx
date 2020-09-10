import { createContext } from 'react'
import { Auth, AuthDispatch } from './AuthContext.types'

export const AuthStateContext = createContext<Auth | undefined>(undefined)
export const AuthDispatchContext = createContext<AuthDispatch | undefined>(undefined)