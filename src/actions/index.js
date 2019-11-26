export const SEND_BOOKING_INFO = 'SEND_BOOKING_INFO'
export const FETCH_MENU = 'FETCH_MENU'

export const sendBookingInfo = booking => ({
  type: SEND_BOOKING_INFO,
  payload: booking
})

export const fetchMenu = menu => ({
  type: FETCH_MENU,
  payload: menu
})
