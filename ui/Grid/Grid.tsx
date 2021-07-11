import cx from "classnames"

import styles from "./Grid.module.scss"
import { ColumnProps, Props, SectionColProps, SectionProps } from "./Grid.types"

export const Row = ({ children }: Props) => <div className={styles.row}>{children}</div>
export const Container = ({ children }: Props) => <div className={styles.container}>{children}</div>
export const Col = ({ children, align = "" }: ColumnProps) => (
  <div className={cx(styles.col, styles[align])}>{children}</div>
)
export const Section = ({ children, section = "default" }: SectionProps) => (
  <div className={cx(styles.section, styles[section])}>{children}</div>
)
export const SectionCol = ({ children, type = "default" }: SectionColProps) => (
  <div className={cx(styles.sectionCol, styles[type])}>{children}</div>
)
