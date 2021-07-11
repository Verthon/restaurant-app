import * as React from "react"
import cx from "classnames"

import styles from "./Heading.module.scss"
import { Props } from "./Heading.types"

export const Heading = ({ children, level, variant = "md", color = "default", align = "inherit" }: Props) => {
  const Tag = level
  return <Tag className={cx(styles.heading, styles[variant], styles[color], styles[align])}>{children}</Tag>
}
