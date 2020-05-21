/* eslint-disable prefer-destructuring */
import dayjs from 'dayjs'
export const formatPrice = cents => {
  const options = {
    style: 'currency',
    currency: 'USD'
  }
  return (cents / 100).toLocaleString('en-US', options)
}

export const formatDate = date => {
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

export const splitDate = date => {
  let formatedDate = ''
  const temp = date.split(',')
  formatedDate = temp[1]
  return formatedDate
}

export const splitTime = date => {
  let formatedTime = ''
  const temp = date.split(',')
  formatedTime = temp[3]
  return formatedTime
}

export const loadLocalStorageState = name => {
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

export const saveLocalStorageState = state => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem('booking', serializedState)
  } catch (err) {}
}

export const getTomorrowsDate = () => {
  const tomorrow = dayjs()
    .add(1, 'day')
    .set('hour', 12)
    .set('minutes', 0)
  return tomorrow.$d
}

export const convertToDate = date => {
  return new Date(date)
}

export const transformLocalStorageData = data => {
  const booking = {
    ...data,
    date: convertToDate(data.date),
    people: parseInt(data.people)
  }
  return booking
}

export const isDateCurrent = date =>
  dayjs(getTomorrowsDate()).isBefore(dayjs(date)) ||
  dayjs(date).isSame(dayjs(getTomorrowsDate()), 'day')

export const getEmailActionUrl = email => `https://formspree.io/${email}`

export const formatBookings = (data) => {
  return data.map((booking) => {
    booking.date = booking.date.toDate()
    return booking
  })
}

export const formatMenu = (data) => {
  const menu = data[0]
  return menu
}
