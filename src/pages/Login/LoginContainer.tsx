import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { ADMIN } from '../../constants/routes'
import { login } from '../../utils/login'
import { notifyError } from '../../utils/notification'
import { DB_ERROR_MSG } from '../../constants/toastMessages'
import { Login } from './Login'
import { useAuthDispatch } from '../../hooks/useAuthDispatch/useAuthDispatch'
import { setAuthorized, setUnauthorized, startAuthorizing } from '../../context/auth/authActionCreators/authActionCreator'
import { useAuthState } from '../../hooks/useAuthState/useAuthState'

export const LoginContainer = () => {
  const history = useHistory();
  const [error, setError] = useState<boolean>(false)

  const [form, setInputs] = useState({
    email: '',
    password: ''
  })

  const { user, isAuthorizing } = useAuthState();
  const dispatch = useAuthDispatch(); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(startAuthorizing())
    e.preventDefault()
    try {
      const payload = await login(form.email, form.password)
      console.log('user in login', payload.user)
      console.info('user in AuthState', user)
      dispatch(setAuthorized(payload.user as any))
      if(payload.user && user) {
        history.push(ADMIN);
      }
    } catch (error) {
      console.log('error in login', error)
      dispatch(setUnauthorized())
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
  return <Login onSubmit={handleSubmit} handleChange={handleInputChange} error={error} loading={isAuthorizing} />
}