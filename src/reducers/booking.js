export const ADD_BOOKING = 'ADD_BOOKING'

const addBooking = (state, booking) => {
  console.log('state and booking in addBooking()', state, booking)
  return { ...state, booking: booking }
}

export const bookingReducer = (state, action) => {
  console.log('booking reducer(action, state)', action, state)
  switch (action.type) {
    case ADD_BOOKING:
      return addBooking(state, action.booking)
    default:
      return state
  }
}
