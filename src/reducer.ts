export const ADD_BOOKING = 'ADD_BOOKING'
export const ADD_COMPANY = 'ADD_COMPANY'
export const LOGIN = 'LOGIN'

const addCompanyData = (state, data) => ({ ...state, company: data })

const addBooking = (state, booking) => {
  return { ...state, booking: booking }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return addBooking(state, action.booking)
    case ADD_COMPANY:
      return addCompanyData(state, action.company)
    default:
      return state
  }
}
