import React, { useMemo, useReducer } from 'react'
import { login, logout } from '../utils/login'
import { AuthContext } from '../components/AuthContext'
import { reducer } from '../reducer'

type State = {
  booking: any
  contact: {}
  user: null | {}
}

export const useAuth = () => {
  const initialState = {
    booking: {},
    contact: {},
    user: null
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const doLogin = async (email: string, password: string) => {
    const response = await login(email, password)
    return response
  }
  const doLogout = async () => {
    const response = await logout()
    return response
  }
  const value = useMemo(() => ({ state, doLogin, doLogout }), [state])
  return {
    dispatch,
    value,
    state,
    doLogin,
    doLogout
  }
}

export const AuthProvider = (props: { value: any; children: React.ReactNode }) => {
  return <AuthContext.Provider value={props.value}>{props.children}</AuthContext.Provider>
}
