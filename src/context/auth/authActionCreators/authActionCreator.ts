import { User } from "firebase";
import { SET_AUTHORIZED, SET_UNAUTHORIZED, LOGOUT, START_AUTHORIZING } from "../authReducer/AuthReducer";
import { AuthAction } from "../authReducer/AuthReducer.types";

export const setAuthorized: (user: User) => AuthAction = user => {
  console.log('setAuthorized', user)
  return ({
    type: SET_AUTHORIZED,
    user,
  })
};

export const setUnauthorized: () => AuthAction = () => ({
  type: SET_UNAUTHORIZED,
});

export const logout: () => AuthAction = () => ({
  type: LOGOUT,
});

export const startAuthorizing: () => AuthAction = () => ({
  type: START_AUTHORIZING,
});