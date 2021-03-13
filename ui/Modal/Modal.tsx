import React from "react"

import styles from "./Modal.module.scss"

type Props = {
  show: boolean
  children: React.ReactNode
}

export const Modal = ({ show, children }: Props) => {
  const activeClassName = show ? styles.active : styles.disabled
  return (
    <div className={`${styles.modal} ${activeClassName}`}>
      <article className={styles.content}>{children}</article>
    </div>
  )
}
