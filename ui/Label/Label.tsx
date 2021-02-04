import React from 'react'

type Props = {
  children: React.ReactNode
} &React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

export const Label: React.FC<Props> = ({ children, htmlFor }: Props) => {
  return <label className="label" htmlFor={htmlFor}>{children}</label>
}
