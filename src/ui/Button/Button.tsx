import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import './Button.scss'

export type Props = {
  variant?: 'dark' | 'light' | 'transparent'
  sizeCorrect?: 'small' | 'default' | 'large',
  className?: 'btn--dark' | 'btn--light' | 'btn--transparent'
  size?: 'btn--large' | 'btn--small'
  children: ReactNode
  link?: string
  href?: string
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  type?: 'submit' | 'button'
} & React.Props<HTMLButtonElement | HTMLAnchorElement>

export const Button: React.FC<Props> = ({ className, size, children, link, href, type, onClick }) => {
  if (link) {
    return (
      <Link className={`btn ${className ? className : ''} ${size ? size : ''}`} to={link}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a className={`btn ${className ? className : ''} ${size ? size : ''}`} href={href}>
        {children}
      </a>
    )
  }
  return <button className={`btn ${className ? className : ''} ${size ? size : ''}`} type={type} onClick={onClick}>{children}</button>
}