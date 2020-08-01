/* eslint-disable prefer-destructuring */
import dayjs from 'dayjs'
export const formatPrice = (cents: number) => {
  const options = {
    style: 'currency',
    currency: 'USD'
  }
  return (cents / 100).toLocaleString('en-US', options)
}

export const formatDate = (date: Date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  return date.toLocaleDateString('en-US', options)
}

export const splitDate = (date: string) => {
  let formatedDate = ''
  const temp = date.split(',')
  formatedDate = temp[1]
  return formatedDate
}

export const splitTime = (date: string) => {
  let formatedTime = ''
  const temp = date.split(',')
  formatedTime = temp[3]
  return formatedTime
}

export const loadLocalStorageState = (name: string) => {
  try {
    const serializedState = window.localStorage.getItem(name)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveLocalStorageState = (state: { booking: { date: Date; guests: number; name: string; email: string; confirmed: boolean } }) => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem('booking', serializedState)
  } catch (err) { }
}

export const getTomorrowsDate = () => {
  const tomorrow = dayjs()
    .add(1, 'day')
    .set('hour', 12)
    .set('minute', 0)
  return tomorrow.toDate()
}

export const convertToDate = (date: string | number | Date) => {
  return new Date(date)
}

export const transformLocalStorageData = (data: { date: string; guests: string } | any) => {
  const booking = {
    ...data,
    date: convertToDate(data.date),
    guests: parseInt(data.guests)
  }
  return booking
}

export const isDateCurrent = (date: string | number | dayjs.Dayjs | Date | undefined) =>
  dayjs(getTomorrowsDate()).isBefore(dayjs(date)) ||
  dayjs(date).isSame(dayjs(getTomorrowsDate()), 'day')

export const getEmailActionUrl = (email: string) => `https://formspree.io/${email}`

export const formatBookings = (booking: any[]) => {
  return booking.map((booking: { data: { date: { toDate: () => any } } }) => {
    booking.data.date = booking.data.date.toDate()
    return booking
  })
}

export const formatMenu = (data: string | any) => {
  if (data && data.length > 0) {
    const menu = [...data]
    return menu
  }
  return []
}
