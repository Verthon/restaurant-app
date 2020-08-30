import { login, logout } from '../utils/login'
import { useState } from 'react'

export const useAuth = () => {
  const initialState = {
    user: null
  }
  const [user, setUser] = useState(initialState)
  const doLogin = async (email: string, password: string) => {
    const response = await login(email, password)
    return response
  }
  const doLogout = async () => {
    const response = await logout()
    return response
  }
  return {
    user,
    setUser,
    doLogin,
    doLogout
  }
}
