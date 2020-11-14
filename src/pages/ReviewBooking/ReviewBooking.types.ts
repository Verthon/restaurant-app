import { BookingData } from "../../context/bookingData/BookingDataContext.types";

export type Props = {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => void
  bookingData: BookingData,
  editable: boolean,
  show: boolean,
  handleBookingEdit: () => void,
  loading: boolean,
}