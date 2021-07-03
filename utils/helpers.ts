import add from "date-fns/add"

import { Booking } from "../constants/booking"

export const formatPrice = (cents: number) => {
  const options = {
    style: "currency",
    currency: "USD",
  }
  return (cents / 100).toLocaleString("en-US", options)
}

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }
  return date.toLocaleDateString("en-US", options)
}

export const splitDate = (date: string) => {
  let formatedDate = ""
  const temp = date.split(",")
  formatedDate = temp[1]
  return formatedDate
}

export const splitTime = (date: string) => {
  let formatedTime = ""
  const temp = date.split(",")
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
type BookingState = {
  state: { booking?: Booking }
}
export const saveLocalStorageState = (state: BookingState) => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem("booking", serializedState)
  } catch (err) {
    return
  }
}

export const getTomorrowsDate = (): Date => {
  return add(new Date(), { days: 1 })
}

export const convertToDate = (date?: string | Date) => {
  if (date) {
    return new Date(date)
  }
  return new Date()
}

type SerializedBooking = { [K in keyof Booking]: string }
export const transformLocalStorageData = (data: SerializedBooking): Booking => {
  const guests = Number(data.guests)
  const confirmed = JSON.parse(data.confirmed)
  const booking = {
    ...data,
    date: convertToDate(data.date),
    guests,
    confirmed,
    id: undefined,
  }
  return booking
}

export const getEmailActionUrl = (email: string) => `https://formspree.io/${email}`

type Link = {
  path: string
  isHashLink: boolean
}

export const generateLink = ({ path, isHashLink }: Link) => {
  if (isHashLink) {
    return `#${path}`
  }

  return `/${path}`
}
