import { SEND_BOOKING_INFO, ADD_BOOKING, GET_CURRENT_BOOKING } from '../actions'

const initialState = {
  booking: {
    date: new Date(),
    people: 1,
    name: 'John Doe',
    email: 'johndoe@xx.ox',
    confirmed: false,
    send: false
  }
}

const addBooking = (state, booking) => {
  console.log('state and booking in addBooking()', state, booking)
  return { ...state, booking: booking }
}

const getCurrentBooking = (state) => {
  return state.booking
}

export const booking = (state = initialState, action) => {
  switch (action.type) {
    case SEND_BOOKING_INFO:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const bookingReducer = (state = initialState, action) => {
  console.log('booking reducer(action, state)', action, state)
  switch (action.type) {
    case ADD_BOOKING:
      return addBooking(state, action.booking)
    case GET_CURRENT_BOOKING:
      return getCurrentBooking(state)
    default:
      return state
  }
}

// export const addBooking = (booking) => {dispatch({
//   type: "ADD_BOOKING"
// })}
