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

export const loadLocalStorageState = () => {
  try {
    const serializedState = window.localStorage.getItem('booking')
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

export const tomorrow = () => {
  const tomorrow = dayjs()
    .add(1, 'day')
    .set('hour', 15)
    .set('minute', 0)
  return tomorrow.$d
}

export const convertToDate = date => {
  return new Date(date)
}

export const transformLocalStorageData = booking => {
  // Immutable set booking.date to correct date object and booking.guests to be a number
  return booking
}

export const isDateCurrent = date => {
  // Check if given date is greater than tomorrow()
  return date
}
