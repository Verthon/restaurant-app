export const SEND_BOOKING_INFO = 'SEND_BOOKING_INFO'
export const FETCH_MENU = 'FETCH_MENU'
export const ADD_BOOKING = 'ADD_BOOKING'
export const GET_CURRENT_BOOKING = 'GET_CURRENT_BOOKING'

export const sendBookingInfo = (booking) => ({
  type: SEND_BOOKING_INFO,
  payload: booking
})

export const fetchMenu = (menu) => ({
  type: FETCH_MENU,
  payload: menu
})
