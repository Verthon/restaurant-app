import React, { useEffect, useReducer } from 'react'

import { firebase } from '../../firebase';
import { setAuthorized } from './authActionCreators/authActionCreator';
import { AuthDispatchContext, AuthStateContext } from './AuthContext'
import { authReducer } from './authReducer/AuthReducer';

export const AuthController = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthorized: false,
    isAuthorizing: false,
    user: null,
  });
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setAuthorized(user));
      }
    })
  }, [state.isAuthorizing])

  return <AuthDispatchContext.Provider value={dispatch}>
    <AuthStateContext.Provider value={state}>
      {children}
    </AuthStateContext.Provider>
  </AuthDispatchContext.Provider>
}
