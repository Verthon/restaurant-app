import React from 'react'
import dayjs from 'dayjs'
import { ReactComponent as OptionsIcon } from '/assets/icons/option.svg'

type Props = {
  name: string
  email: string
  confirmed?: boolean
  date: Date
  guests: number
  toggleOptions: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const formatDate = (date: Date) => {
  return dayjs(date)
  .set('minute', 0)
  .format('HH:mm')
}

export const BookingItem: React.FC<Props> = ({ name, email, date, guests, toggleOptions }) => {
  return (
    <tr className="table__row animate__animated animate__fadeInDown">
      <td className="table__cell">{name}</td>
      <td className="table__cell">{dayjs(date).format('DD/MM/YYYY')}</td>
      <td className="table__cell">
        {formatDate(date)}
      </td>
      <td className="table__cell">{email}</td>
      <td className="table__cell table__cell--center">{guests}</td>
      <td className="table__cell table__cell--center">
        <OptionsIcon className="table__cell__icon" onClick={toggleOptions} />
      </td>
    </tr>
  )
}
