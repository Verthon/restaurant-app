import React from 'react'
import Link from 'next/link'

type Props = { hashlink: boolean; name: string; link: string }

export const NavItem: React.FC<Props> = ({ hashlink, name, link }) => (
  <li className="nav__item">
    {hashlink ? (
      <Link data-testid="navlink" href={`#${link}`}>
        <a className="nav__link">
          {name}
        </a>
      </Link>
    ) : (
      <Link data-testid="navlink" href={`/${link}`}>
        <a className="nav__link">
          {name}
        </a>
      </Link>
    )}
  </li>
)
