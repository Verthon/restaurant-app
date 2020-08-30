import React from 'react'
import { AuthContext } from './AuthContext'
import { useAuth } from '../../hooks/useAuth'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser, doLogin, doLogout } = useAuth()
  return <AuthContext.Provider value={{user, setUser, doLogin, doLogout}}>{children}</AuthContext.Provider>
}
