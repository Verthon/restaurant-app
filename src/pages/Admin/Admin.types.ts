import { Order } from "../../utils/database"

export type Props = {
  isLoading: boolean
  handleSignOut: () => Promise<void>
  bookingHandlers?: {
    handleBookingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBookingUpdate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => void;
    handleDateChange: (_date: Date, e: React.SyntheticEvent<any, Event>) => void;
    handleBookingDelete: () => void;
  }
  toggleOptions: (booking: any) => void
  bookings: never[]
  bookingDetail: any,
  bookingModal: {
    showModal: boolean | undefined
    toggleModal: (() => void)
  }
}

export type Params = {
  name: string
  order: Order
  limit: number
}