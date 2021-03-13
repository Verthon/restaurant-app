import React from "react"

import styles from "./Label.module.scss"

type Props = {
  children: React.ReactNode
} & React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

export const Label = ({ children, htmlFor }: Props) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  )
}
