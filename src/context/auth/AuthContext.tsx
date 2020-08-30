import { createContext } from 'react'
import { Auth } from './AuthContext.types'

export const AuthContext = createContext<Auth | undefined>(undefined)