import React from 'react'
import Link from 'next/link'

import { Container } from "ui/Container/Container"

import styles from './NotFound.module.scss'

export const NotFound = () => (
  <Container>
    <article className={styles.notfound}>
      <h1>404 not found in database</h1>
      <Link href="/"><a>Homepage</a></Link>
    </article>
  </Container>
)
