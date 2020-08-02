import './Button.scss'

import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export type Props = {
  className?: 'btn--dark' | 'btn--light' | 'btn--transparent'
  size?: 'btn--large' | 'btn--small'
  children: ReactNode
  link?: string
  href?: string
  onClick?: Function
}

export const Button: React.FC<Props> = ({ className, size, children, link, href }) => {
  if (link) {
    return (
      <Link className={`btn ${className} ${size}`} to={link}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a className={`btn ${className} ${size}`} href={href}>
        {children}
      </a>
    )
  }
  return <button className={`btn ${className} ${size}`}>{children}</button>
}
