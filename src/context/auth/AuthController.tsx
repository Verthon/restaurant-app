import React, { useReducer } from 'react'
import { AuthDispatchContext, AuthStateContext } from './AuthContext'

export const AuthController = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthorized: false,
    isAuthorizing: false,
    user: undefined,
  });
  return <AuthDispatchContext.Provider value={dispatch}>
    <AuthStateContext.Provider value={state}>
      {children}
    </AuthStateContext.Provider>
  </AuthDispatchContext.Provider>
}
