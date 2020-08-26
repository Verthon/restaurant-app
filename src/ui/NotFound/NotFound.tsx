import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.scss'

export const NotFound = () => (
  <div className="container">
    <article className="not-found">
      <h1>404 not found in database</h1>
      <Link to="/">Homepage</Link>
    </article>
  </div>
)
