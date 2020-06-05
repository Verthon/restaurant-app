import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../../components/UserContext'
import Navbar from '../../components/Navbar'
import { ADMIN } from '../../constants/routes'
import { navigateTo } from '../../utils/navigate'
import { login } from '../../utils/login'
import { notifyError } from '../../utils/notification'
import { DB_ERROR_MSG } from '../../constants/toastMessages'
import { pageTransitions } from '../../constants/config'
import bookTableImg from '../../assets/images/brooke-lark-book-table.jpg'

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
    } catch (error) {
      handleError(error)
      notifyError(DB_ERROR_MSG)
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
      <motion.div initial="exit" animate="enter" exit="exit" variants={pageTransitions} className='container row'>
        <div className='section section__col login'>
          <h1 className='heading'>Login</h1>
          <form method='POST' className='login__form' onSubmit={handleSubmit}>
            <label htmlFor='email' className='label login__label'>
              Email
            </label>
            <input
              type='email'
              className='input'
              name='email'
              required
              onChange={handleInput}
            />
            <label htmlFor='email' className='label login__label'>
              Password
            </label>
            <input
              type='password'
              className='input'
              name='password'
              required
              onChange={handleInput}
            />
            <p className='login__error'>
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
      </motion.div>
    </>
  )
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func })
}

Login.defaultProps = {
  history: {}
}

export default withRouter(Login)
