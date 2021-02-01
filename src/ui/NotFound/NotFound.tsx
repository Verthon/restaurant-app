import React from 'react'
import Link from 'next/link'

import './NotFound.scss'

export const NotFound = () => (
  <div className="container">
    <article className="not-found">
      <h1>404 not found in database</h1>
      <Link href="/"><a>Homepage</a></Link>
    </article>
  </div>
)
