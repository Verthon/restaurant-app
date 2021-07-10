type Tag = "p" | "span" | "strong"
type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
type Alignment = "left" | "center" | "right"

export type Props = {
  children: React.ReactNode
  tag?: Tag
  size?: Size
  align?: Alignment
}
