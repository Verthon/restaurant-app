import React, { useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'
import { login, logout } from '../../utils/login'
import { AuthContext } from '../components/AuthContext'
import { reducer } from '../reducer'

export const useAuth = () => {
  const initialState = {
    booking: {},
    contact: {},
    user: null
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const doLogin = async (email, password) => {
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

export const AuthProvider = props => {
  return (
    <AuthContext.Provider value={props.value}>
      {props.children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string
}

AuthProvider.defaultProps = {
  history: {}
}
