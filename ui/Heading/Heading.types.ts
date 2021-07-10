type Variant = "sm" | "md" | "lg"

type Level = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type Color = "default" | "primary" | "secondary"

export type Props = {
  children: React.ReactNode
  level: Level
  variant?: Variant
  color?: Color
} & React.HTMLProps<HTMLHeadingElement>
