import React, { useState, useContext, useReducer } from 'react'
import { motion } from 'framer-motion'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../../components/UserContext'
import { apiReducer, apiInitialState } from '../../reducers/apiReducer'
import Navbar from '../../components/Navbar'
import { ADMIN } from '../../constants/routes'
import { navigateTo } from '../../utils/navigate'
import { login } from '../../utils/login'
import { notifyError } from '../../utils/notification'
import { DB_ERROR_MSG } from '../../constants/toastMessages'
import { pageTransitions } from '../../constants/config'
import bookTableImg from '../../assets/images/brooke-lark-book-table.jpg'
import Spinner from '../../components/Spinner'

type Error = {
  message: string
}

const Login: React.FC<any> = ({ history }) => {
  const [state, dispatch] = useReducer(apiReducer, apiInitialState)
  const links = [{ name: 'Menu', link: 'menu' }, { name: 'Book Table', link: 'book-table' }]
  const [error, setError] = useState<any>({
    error: {
      message: ''
    }
  })

  const [form, setInputs] = useState({
    email: '',
    password: ''
  })

  const { setUser } = useContext(UserContext)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    dispatch({ type: 'FETCHING' })
    e.preventDefault()
    try {
      const user = await login(form.email, form.password)
      if (setUser) {
        setUser(user)
        dispatch({ type: 'SUCCESS' })
        navigateTo(history, ADMIN)
      }
    } catch (error) {
      dispatch({ type: 'ERROR' })
      handleError(error)
      notifyError(DB_ERROR_MSG)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleError = (error: any) => {
    setError(error)
  }

  if (state.isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Navbar links={links} hashlink={false} />
      <motion.div initial="exit" animate="enter" exit="exit" variants={pageTransitions} className="container row">
        <div className="section section__col login">
          <h1 className="heading">Login</h1>
          <form method="POST" className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="label login__label">
              Email
            </label>
            <input type="email" className="input" name="email" required onChange={handleInputChange} />
            <label htmlFor="email" className="label login__label">
              Password
            </label>
            <input type="password" className="input" name="password" required onChange={handleInputChange} />
            <p className="login__error">{error ? error.message : null}</p>
            <button data-testid="login-submit" type="submit" className="btn btn--dark login__btn">
              Login
            </button>
          </form>
        </div>
        <div className="section section__col">
          <picture>
            <img src={bookTableImg} alt="" className="table-booking__image" />
          </picture>
        </div>
      </motion.div>
    </>
  )
}

export default withRouter(Login)
