import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { UserContext } from '../components/UserContext'
import Navbar from '../components/Navbar'
import { ADMIN } from '../constants/routes'
import { navigateTo } from '../utils/navigate'
import { login } from '../utils/login'
import bookTableImg from '../assets/images/brooke-lark-book-table.jpg'

const Login = ({ history }) => {
  const [error, setError] = useState({ error: false })

  const [form, setInputs] = useState({
    email: '',
    password: ''
  })

  const { setUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await login(form.email, form.password)
      setUser(user)
      navigateTo(history, ADMIN)
    } catch {
      handleError(error)
    }
  }

  const handleInput = (e) => {
    setInputs({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleError = (error) => {
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
              onChange={handleInput}
            />
            <input
              type='password'
              className='input'
              placeholder='password'
              name='password'
              required
              onChange={handleInput}
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
