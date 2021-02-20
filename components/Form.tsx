import React from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { Label } from 'ui/Label/Label'
import { Input } from 'ui/Input/Input'
import { Button } from 'ui/Button/Button'
import styles from "ui/Input/Input.module.scss"
import { ActionType, Dispatch, State } from 'context/booking/BookingContext.types'

type Props = {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => void
  dispatch: Dispatch
  booking: State
  config: any
  cssClass?: string
  submitBtn: boolean
  action: string
  withBookingDesc: boolean
  loading?: boolean
}

const Form = ({
  handleSubmit,
  booking,
  config,
  submitBtn,
  cssClass,
  action,
  withBookingDesc,
  loading = false,
  dispatch
}: Props) => {
  config.startDate = new Date(dayjs(config.startDate).toISOString())

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionType.changeBooking, payload: { e } })
  }

  const handleDate = (date: Date | [Date, Date]) => {
    dispatch({ type: ActionType.changeDate, payload: { date: date } })
  }

  const parseDate = (date: Date | [Date, Date]) => {
    if(date instanceof Date) {
      return date;
    }

    return new Date(String(date));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cssClass ? `form ${cssClass}` : 'form'}
      action={action}
      aria-label="Add a booking"
    >
      {withBookingDesc ? (
        <p className="text form__description">Please remember that, you can book a table with maximum of 4 guests.</p>
      ) : null}
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        required
        aria-required="true"
        defaultValue={booking.name}
        onChange={handleChange}
      />
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        name="email"
        required
        aria-required="true"
        onChange={handleChange}
        defaultValue={booking.email}
      />
      <Label htmlFor="Datepicker">Date</Label>
      <DatePicker
        name="Datepicker"
        className={styles.input}
        selected={parseDate(booking.date)}
        onChange={handleDate}
        showTimeSelect
        minDate={config.startDate}
        timeFormat="HH"
        timeIntervals={60}
        minTime={config.startDate.setHours(config.minTime)}
        maxTime={config.startDate.setHours(config.maxTime)}
        dateFormat="MMMM dd, yyyy h aa"
        timeCaption="Time"
        placeholderText="Click and choose the date"
      />
      <Label htmlFor="guests">Number of guests</Label>
      <Input
        name="guests"
        id="guests"
        type="number"
        min="1"
        max="4"
        required
        aria-required="true"
        onChange={handleChange}
        defaultValue={booking.guests}
      />
      {withBookingDesc ? (
        <p className="text table-booking__reminder">
          Table is kept for 15 minutes after reservation time. We appreciate you being on time.
        </p>
      ) : null}
      {submitBtn ? (
        <Button variant="dark" size="large" type="submit" loading={loading}>
          Next step
        </Button>
      ) : null}
    </form>
  )
}

export default Form
