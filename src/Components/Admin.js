import React from 'react'
import Navbar from './Navbar'
import { LOGIN } from '../constants/routes'
import db, { firebase } from '../firebase'
import PropTypes from 'prop-types'

class Admin extends React.Component {
  static propTypes = {
    history: PropTypes.shape({ push: PropTypes.func })
  }

  static defaultProps = {
    history: {}
  }

  constructor () {
    super()
    this.state = {
      bookings: false
    }
  }

  handleSignOut = () => {
    firebase.auth().signOut()
    setTimeout(() => {
      this.props.history.push({ pathname: LOGIN })
    }, 1000)
  }

  componentDidMount () {
    this.listener = firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        db.collection('bookings')
          .get()
          .then((snapshot) => {
            const bookings = []
            snapshot.docs.forEach((doc) => {
              bookings.push(doc.data())
              this.setState({ bookings })
            })
          })
      } else {
        this.props.history.push({ pathname: LOGIN })
      }
    })
  }

  componentWillUnmount () {
    this.listener()
  }

  render () {
    let list = null
    if (this.state.bookings) {
      list = (
        this.state.bookings.map(item => item)
      )
    }
    console.log(list)
    return (
      <>
        <Navbar />
        <main className='container'>
          <h1 className='title'>Admin</h1>
          <ul>
            {list ? list.map(item => {
              return <li key={item.email}>Name: {item.name} | email: {item.email}</li>
            }) : null}
          </ul>
          <button className='btn' onClick={this.handleSignOut}>Sign out</button>
        </main>
      </>
    )
  }
}

export default Admin
