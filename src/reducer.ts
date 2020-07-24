export const ADD_BOOKING = 'ADD_BOOKING'
export const ADD_COMPANY = 'ADD_COMPANY'
const ACTIONS = {
  ADD_BOOKING: 'ADD_BOOKING',
  ADD_COMPANY: 'ADD_COMPANY',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}
export const LOGIN = 'LOGIN'

const addCompanyData = (state: any, data: any) => ({ ...state, company: data })

const addBooking = (state: any, booking: any) => {
  return { ...state, booking: booking }
}

export const reducer = (state: any, action: { type: string; booking?: any; company?: any }) => {
  switch (action.type) {
    case ACTIONS.ADD_BOOKING:
      return addBooking(state, action.booking)
    case ACTIONS.ADD_COMPANY:
      return addCompanyData(state, action.company)
    default:
      return state
  }
}
