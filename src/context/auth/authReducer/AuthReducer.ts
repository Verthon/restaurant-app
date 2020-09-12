import { Auth } from "../AuthContext.types"
import { AuthAction } from "./AuthReducer.types"

export const SET_AUTHORIZED = 'auth/set-authorized'
export const SET_UNAUTHORIZED = 'auth/set-unauthorized'
export const START_AUTHORIZING = 'auth/start-authorizing'
export const LOGOUT = 'auth/logout'

export const authReducer = (state: Auth, action: AuthAction) => {
  console.log('authReducer', state, action)
  switch (action.type) {
    case START_AUTHORIZING:
      return { ...state, isAuthorizing: true }
    case SET_AUTHORIZED:
      return { ...state, user: action.user, isAuthorizing: false, isAuthorized: true }
    case SET_UNAUTHORIZED:
      return {
        ...state, user: undefined, isAuthorizing: false,
        isAuthorized: false,
      }
    case LOGOUT:
      return {
        user: undefined,
        isAuthorizing: false,
        isAuthorized: false,
      }
    default:
      return state
  }
}
