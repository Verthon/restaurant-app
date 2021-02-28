import React from 'react'
import Link from 'next/link'

import styles from "./NavItem.module.scss";
import { generateLink } from 'utils/helpers';

type Props = { hashlink?: boolean; children: React.ReactNode; path?: string }

export const NavItem = ({ hashlink = false, children, path = "" }: Props) => (
  <li className={styles.item}>
      <Link data-testid="navlink" href={generateLink({ path, isHashLink: hashlink  })}>
        <a className={styles.link}>
          { children }
        </a>
      </Link>
  </li>
)
