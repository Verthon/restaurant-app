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

export const saveLocalStorageState = (state: { booking: Booking | undefined }) => {
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

export const convertToDate = (date: string | number | Date) => {
  if (date) {
    return new Date(date)
  }
  return new Date()
}

export const transformLocalStorageData = (data: { date: string; guests: string }) => {
  const booking = {
    ...data,
    date: convertToDate(data.date),
    guests: parseInt(data.guests),
  }
  return booking
}

export const getEmailActionUrl = (email: string) => `https://formspree.io/${email}`

export const formatMenu = (data: string | any) => {
  if (data && data.length > 0) {
    const menu = [...data]
    return menu
  }
  return []
}

export const generateLink = ({ path, isHashLink }: { path: string; isHashLink: boolean }) => {
  if (isHashLink) {
    return `#${path}`
  }

  return `/${path}`
}
