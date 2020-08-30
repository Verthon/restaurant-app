import { BookingData } from "../../context/bookingData/BookingDataContext.types";

export type Props = {
  bookingData: BookingData,
  company: {
    contact: {
      name: string,
      email: string,
      phone: string,
    },
    hours: {
      weekdays: {
        days: string,
        time: string,
      },
      weekend: {
        days: string,
        time: string,
      },
    },
    location: {
      address: string,
      city: string,
      code: string,
      country: string,
      fulladdress: string,
      province: string,
    },
  },
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => void
}