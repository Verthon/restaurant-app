import React from 'react'

import './Spinner.scss'
import logo from '/assets/images/android-chrome-192x192.svg'
export const Spinner = () => {
  return (
    <div className='spinner'>
      <img className='spinner__logo animate__animated animate__bounce animate__infinite' src={logo} alt='Alkinoos Taverna' />
    </div>
  )
}
