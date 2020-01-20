import React, { useState } from 'react'
import Navbar from './Navbar'
import { ADMIN } from '../constants/routes'
import { firebase } from '../firebase'
import PropTypes from 'prop-types'
import bookTableImg from '../images/brooke-lark-book-table.jpg'

const Login = ({ history }) => {
  const [email, setEmail] = useState({ email: '' })
  const [password, setPassword] = useState({ password: '' })
  const [error, setError] = useState({ error: false })

  const handleSubmit = e => {
    e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        setTimeout(() => {
          history.push(ADMIN)
        }, 1000)
      )
      .catch(error => {
        handleError(error)
      })
  }

  const handleEmail = e => {
    const value = e.target.value
    setEmail(value)
  }

  const handlePassword = e => {
    const value = e.target.value
    setPassword(value)
  }

  const handleError = error => {
    setError(error)
  }

  return (
    <>
      <Navbar />
      <div className='container row'>
        <div className='section section__col login'>
          <h1 className='heading'>Login</h1>
          <form method='POST' className='login__form' onSubmit={handleSubmit}>
            <label htmlFor='email' className='label'>
              Email
            </label>
            <input
              type='email'
              className='input'
              placeholder='email'
              name='email'
              required
              onChange={handleEmail}
            />
            <input
              type='password'
              className='input'
              placeholder='password'
              name='password'
              required
              onChange={handlePassword}
            />
            <p className='login__error fade-in'>
              {error ? error.message : null}
            </p>
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

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func })
}

Login.defaultProps = {
  history: {}
}

export default Login
