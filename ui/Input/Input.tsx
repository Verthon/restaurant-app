import React from "react"

import styles from "./Input.module.scss"

type Props = React.HTMLProps<HTMLInputElement>

export const Input = ({ type, name, required, min, max, defaultValue, onChange }: Props) => {
  return (
    <input
      type={type}
      className={styles.input}
      required={required}
      min={min}
      max={max}
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  )
}
