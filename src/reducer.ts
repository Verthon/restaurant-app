export const ADD_BOOKING = 'ADD_BOOKING'
export const ADD_COMPANY = 'ADD_COMPANY'
export const LOGIN = 'LOGIN'

const addCompanyData = (state: any, data: any) => ({ ...state, company: data })

const addBooking = (state: any, booking: any) => {
  return { ...state, booking: booking }
}

export const reducer = (state: any, action: { type: any; booking?: any; company?: any }) => {
  switch (action.type) {
    case ADD_BOOKING:
      return addBooking(state, action.booking)
    case ADD_COMPANY:
      return addCompanyData(state, action.company)
    default:
      return state
  }
}
