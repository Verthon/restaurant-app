import React from 'react'
import Navbar from './Navbar'
import { ADMIN } from '../constants/routes'
import { firebase } from '../firebase'
import PropTypes from 'prop-types'
import bookTableImg from '../images/brooke-lark-book-table.jpg'

class Login extends React.Component {
  static propTypes = {
    history: PropTypes.shape({ push: PropTypes.func })
  }

  static defaultProps = {
    history: {}
  }

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
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(setTimeout(() => {
        this.props.history.push(ADMIN)
      }, 1000))
      .catch((error) => {
        this.setState({ ...this.state, error: error })
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
                required
                onChange={this.handleChange}
              />
              <input
                type='password'
                className='input'
                placeholder='password'
                name='password'
                required
                onChange={this.handleChange}
              />
              <p className='login__error fade-in'>{this.state.error ? this.state.error.message : null}</p>
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
