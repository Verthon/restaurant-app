import Image from "next/image"
import formatFns from "date-fns/format"

type Props = {
  name: string
  email: string
  confirmed?: boolean
  date: Date
  guests: number
  toggleOptions: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

const Booking = ({ name, email, date, guests, toggleOptions }: Props) => {
  const formatDate = (date: Date, format: string): string => {
    return formatFns(new Date(date), format)
  }
  return (
    <tr className="table__row animate__animated animate__fadeInDown">
      <td className="table__cell">{name}</td>
      <td className="table__cell">{formatDate(date, "dd/MM/yyyy")}</td>
      <td className="table__cell">{formatDate(date, "HH:mm")}</td>
      <td className="table__cell">{email}</td>
      <td className="table__cell table__cell--center">{guests}</td>
      <td className="table__cell table__cell--center">
        <Image src="/assets/icons/option.svg" onClick={toggleOptions} width="35px" height="35px" alt="" />
      </td>
    </tr>
  )
}

export default Booking
