import Image from "next/image"
import dayjs from 'dayjs'

type Props = {
  name: string
  email: string
  confirmed?: boolean
  date: Date
  guests: number
  toggleOptions: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

const Booking = ({ name, email, confirmed, date, guests, toggleOptions }: Props) => {
  return (
    <tr className="table__row animate__animated animate__fadeInDown">
      <td className="table__cell">{name}</td>
      <td className="table__cell">{dayjs(date).format('DD/MM/YYYY')}</td>
      <td className="table__cell">
        {dayjs(date)
          .set('minute', 0)
          .format('HH:mm')}
      </td>
      <td className="table__cell">{email}</td>
      <td className="table__cell table__cell--center">{guests}</td>
      <td className="table__cell table__cell--center">
        <Image src="/assets/icons/option.svg" onClick={toggleOptions} width="35px" height="35px"/>
      </td>
    </tr>
  )
}

export default Booking
