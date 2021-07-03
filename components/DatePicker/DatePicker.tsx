import set from "date-fns/set"
import ReactDatePicker from "react-datepicker"

import styles from "ui/Input/Input.module.scss"
import { getTomorrowsDate } from "utils/helpers"
import { Props } from "./Datepicker.types"

const DEFAULT_DATE_FORMAT = "MMMM dd, yyyy h aa"
const CONFIG = {
  startDate: getTomorrowsDate(),
  minTime: 12,
  maxTime: 22,
}

export const DatePicker = ({
  onChange,
  minDate = CONFIG.startDate,
  selected,
  startDate,
  minTimeVal,
  maxTimeVal,
}: Props) => {
  const createConfigDate = (hours?: number): Date | undefined => {
    if (!hours) {
      return
    }
    const date = set(startDate || CONFIG.startDate, { hours: hours })

    return date
  }
  const minTimeDate = createConfigDate(minTimeVal)
  const maxTimeDate = createConfigDate(maxTimeVal)

  return (
    <ReactDatePicker
      name="Datepicker"
      className={styles.input}
      selected={selected}
      onChange={onChange}
      showTimeSelect
      minDate={minDate}
      timeFormat="HH"
      timeIntervals={60}
      minTime={minTimeDate}
      maxTime={maxTimeDate}
      dateFormat={DEFAULT_DATE_FORMAT}
      timeCaption="Time"
      placeholderText="Click and choose the date"
    />
  )
}
