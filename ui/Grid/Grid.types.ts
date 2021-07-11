export type Props = {
  children: React.ReactNode
}

export type ColumnProps = {
  children: React.ReactNode
  align?: "" | "center"
}

type Sections = "default" | "about" | "menu" | "testimonials"

export type SectionProps = {
  children: React.ReactNode
  section?: Sections
} & React.HTMLProps<HTMLElement>

type ColTypes = "default" | "description"

export type SectionColProps = {
  children: React.ReactNode
  type?: ColTypes
}
