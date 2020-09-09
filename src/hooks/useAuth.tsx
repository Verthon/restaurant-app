import { login, logout } from '../utils/login'
import { useState, useEffect } from 'react'
import firebase, { User } from 'firebase'

export const useAuth = () => {
  const initialState = null;
  const [user, setUser] = useState<User | null>(initialState)
  const doLogin = async (email: string, password: string) => {
    const response = await login(email, password)
    return response
  }
  const doLogout = async () => {
    const response = await logout()
    return response
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    });
  }, [])
  return {
    user,
    setUser,
    doLogin,
    doLogout
  }
}
