export const COMPANY_DATA = {
  contact: {
    name: "Alkinoos Taverna",
    email: "alkinoos-taverna@gmail.com",
    phone: "+1 555-555-555",
  },
  hours: {
    weekdays: {
      days: "Monday - Friday",
      time: "12:00am - 10:00pm",
    },
    weekend: {
      days: "Saturday - Sunday",
      time: "12:00am - 10:00pm",
    },
  },
  location: {
    address: "23 Main Avenue",
    city: "Montréal",
    code: "ZZ2-C6Z",
    country: "Canada",
    fulladdress: "23 Main Avenue, Montréal, ZZ2-C6Z",
    province: "Quebec",
  },
}

export type COMPANY_DATA_TYPE = typeof COMPANY_DATA
