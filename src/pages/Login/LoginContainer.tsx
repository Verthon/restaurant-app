import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import NProgress from 'nprogress'

import * as ROUTES from '../../constants/routes'
import { doLogin } from '../../utils/login'
import { Login } from './Login'
import { useAuthDispatch } from '../../hooks/useAuthDispatch/useAuthDispatch'
import { setAuthorized, setUnauthorized, startAuthorizing } from '../../context/auth/authActionCreators/authActionCreator'
import { useAuthState } from '../../hooks/useAuthState/useAuthState'

export const LoginContainer = () => {
  const [error, setError] = useState<boolean>(false)

  const [form, setInputs] = useState({
    email: '',
    password: ''
  })

  const { isAuthorizing, isAuthorized } = useAuthState();
  const dispatch = useAuthDispatch(); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(startAuthorizing())
    NProgress.start()
    try {
      const payload = await doLogin(form.email, form.password)
      if(payload && payload.user) {
        dispatch(setAuthorized(payload.user as any))
        NProgress.done()
        return true
      }
    } catch (error) {
      console.log('error in login', error)
      dispatch(setUnauthorized())
      NProgress.done()
      setError(true)
    }
    NProgress.done()
    dispatch(setUnauthorized())
    return false
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  if (isAuthorized) {
    return <Redirect to={ROUTES.ADMIN} />
  }

  return <Login onSubmit={handleSubmit} handleChange={handleInputChange} error={error} loading={isAuthorizing} />
}