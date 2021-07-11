type OpeningTimes = {
  days: string | null
  time: string | null
}

type RestaurantLocation = {
  address: string
  city: string
  code: string
  province: string
  country: string
}

type ContactInfo = {
  email: string
  phone: string
}

export type Props = {
  hours: {
    weekdays: OpeningTimes | null
    weekend: OpeningTimes | null
  } | null
  location: RestaurantLocation | null
  contact: ContactInfo | null
}
