import React, { ButtonHTMLAttributes, ReactNode } from "react"
import Link from "next/link"

import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator"

import styles from "./Button.module.scss"

export type Props = {
  variant: "dark" | "light" | "transparent"
  size: "regular" | "large" | "small"
  children: ReactNode
  link?: string
  href?: string
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
  type?: "submit" | "button"
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const generateClassName = (variant: Props["variant"], size: Props["size"]) => {
  return [styles.btn, styles[size], styles[variant]].join(" ")
}

export const Button = ({ variant, size, children, link, href, type, onClick, loading }: Props) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={generateClassName(variant, size)}>{children}</a>
      </Link>
    )
  }
  if (href) {
    return (
      <a className={generateClassName(variant, size)} href={href}>
        {children}
      </a>
    )
  }
  return (
    <button className={generateClassName(variant, size)} type={type} onClick={onClick} disabled={loading}>
      {children} {loading ? <LoadingIndicator /> : null}
    </button>
  )
}
