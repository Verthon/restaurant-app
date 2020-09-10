import React, { useState, useContext, useReducer } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../../components/UserContext'
import { apiReducer, apiInitialState } from '../../reducers/apiReducer'
import { ADMIN } from '../../constants/routes'
import { login } from '../../utils/login'
import { notifyError } from '../../utils/notification'
import { DB_ERROR_MSG } from '../../constants/toastMessages'
import { Login } from './Login'

export const LoginContainer = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(apiReducer, apiInitialState)
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
        history.push(ADMIN);
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
  return <Login onSubmit={handleSubmit} handleChange={handleInputChange} error={error} state={state} />
}