import React, { Component } from 'react'
import Navbar from './Navbar'
import db from '../base'
import bookTableImg from '../images/brooke-lark-book-table.jpg'

const Login = () => {
  return (
    <>
      <Navbar />
      <div className='container row'>
        <div className='section section__col login'>
          <h1 className='heading'>Login</h1>
          <form method='POST' className='login__form'>
            <label htmlFor='email' className='label'>
              Email
            </label>
            <input
              type='email'
              className='input'
              placeholder='email'
              name='email'
            />
            <button type='submit' className='btn btn--dark login__btn'>
              Login
            </button>
          </form>
        </div>
        <div className='section section__col'>
          <picture>
            <img src={bookTableImg} alt='' className='table-booking__image' />
          </picture>
        </div>
      </div>
    </>
  )
}

export default Login
