import * as React from "react"
import cx from "classnames"

import styles from "./Heading.module.scss"
import { Props } from "./Heading.types"

export const Heading = ({ children, level, size = "md", color = "default" }: Props) => {
  const Tag = level
  return <Tag className={cx(styles.heading, styles[size], styles[color])}>{children}</Tag>
}
