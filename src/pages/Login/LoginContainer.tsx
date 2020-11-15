import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import NProgress from 'nprogress'

import * as ROUTES from '../../constants/routes'
import { Login } from './Login'

export const LoginContainer = () => {

  const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  console.log('isAuthenticated', isAuthenticated)
  const [error, setError] = useState<boolean>(false)

  const [form, setInputs] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    NProgress.start()
    try {
      await loginWithRedirect()
      console.log('user', user)
      if(user) {
        NProgress.done()

        return true
      }
    } catch (error) {
      console.log('error in login', error)
      NProgress.done()
      setError(true)
    }
    NProgress.done()
 
    return false
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  if (isAuthenticated) {
    return <Redirect to={ROUTES.ADMIN} />
  }

  return <Login onSubmit={handleSubmit} handleChange={handleInputChange} error={error} loading={isLoading} />
}
