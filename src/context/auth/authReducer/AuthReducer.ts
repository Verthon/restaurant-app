import { AuthAction } from './AuthReducer.types';
import { action } from '@storybook/addon-actions';

export const SET_AUTHORIZED = 'auth/set-authorized'
export const SET_UNAUTHORIZED = 'auth/set-unauthorized'
export const START_AUTHORIZING = 'auth/start-authorizing'
export const LOGOUT = 'auth/logout'

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case START_AUTHORIZING:
      return { ...state, isAuthorizing: true }
    case SET_AUTHORIZED:
      return { ...state, user: action.payload, isAuthorizing: false, isAuthorized: true }
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
