import React from 'react'
import Link from 'next/link'

import styles from "./NavItem.module.scss";

type Props = { hashlink: boolean; name: string; link: string }

export const NavItem = ({ hashlink, name, link }: Props) => (
  <li className={styles.item}>
    {hashlink ? (
      <Link data-testid="navlink" href={`#${link}`}>
        <a className={styles.link}>
          {name}
        </a>
      </Link>
    ) : (
      <Link data-testid="navlink" href={`/${link}`}>
        <a className={styles.link}>
          {name}
        </a>
      </Link>
    )}
  </li>
)
