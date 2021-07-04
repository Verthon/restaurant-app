import * as React from "react"

import styles from "./Testimonial.module.scss"

type Props = { author: string; text: string }

export const Testimonial = ({ author, text }: Props) => (
  <blockquote className={styles.quote}>
    <p className={styles.text}>{text}</p>
    <p className={styles.writer}>{author}</p>
  </blockquote>
)
