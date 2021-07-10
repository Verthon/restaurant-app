import styles from "./Grid.module.scss"
import { Props } from "./Grid.types"

export const Row = ({ children }: Props) => <div className={styles.row}>{children}</div>
export const Container = ({ children }: Props) => <div className={styles.container}>{children}</div>
export const Col = ({ children }: Props) => <div className={styles.col}>{children}</div>
