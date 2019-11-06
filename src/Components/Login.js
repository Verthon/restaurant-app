import React, { Component } from 'react'
import Navbar from './Navbar'
import { auth } from '../base'
import bookTableImg from '../images/brooke-lark-book-table.jpg'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      error: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      console.log(error)
      this.setState({ ...this.state, error: error })
      const errorCode = error.code
      const errorMessage = error.message
    })
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({ ...this.state, [e.target.name]: value })
  }

  render () {
    return (
      <>
        <Navbar />
        <div className='container row'>
          <div className='section section__col login'>
            <h1 className='heading'>Login</h1>
            <form method='POST' className='login__form' onSubmit={this.handleSubmit}>
              <label htmlFor='email' className='label'>
                Email
              </label>
              <input
                type='email'
                className='input'
                placeholder='email'
                name='email'
                onChange={this.handleChange}
              />
              <input
                type='password'
                className='input'
                placeholder='password'
                name='password'
                onChange={this.handleChange}
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
}

export default Login
