import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Spinner from '../components/Spinner'
import { LOGIN } from '../constants/routes'
import db, { firebase } from '../firebase'
import PropTypes from 'prop-types'

const Admin = ({ history }) => {
  const [bookings, setBookings] = useState([])
  const [loading, handleLoading] = useState(true)

  const handleSignOut = () => {
    firebase.auth().signOut()
    setTimeout(() => {
      history.push({ pathname: LOGIN })
    }, 1000)
  }

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        db.collection('bookings')
          .get()
          .then(snapshot => {
            const data = []
            snapshot.docs.forEach(doc => {
              data.push(doc.data())
            })
            const allBookings = data.map(booking => {
              booking.date = booking.date.toDate()
              return booking
            })
            setBookings(allBookings)
          })
          .then(() => {
            handleLoading(false)
          })
      } else {
        history.push({ pathname: LOGIN })
      }
    })
    return () => listener()
  }, [])

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <Navbar />
      <main className='container'>
        <h1 className='title'>Bookings</h1>
        <button className='btn' onClick={handleSignOut}>
          Sign out
        </button>
        <table className='table'>
          <thead>
            <tr className='table__row'>
              <th className='table__header'>Name</th>
              <th className='table__header'>Date</th>
              <th className='table__header'>Time</th>
              <th className='table__header'>Email</th>
              <th className='table__header'>Guests</th>
            </tr>
          </thead>
          <tbody>
            {bookings
              ? bookings.map(item => {
                return (
                  <Booking
                    key={item.email}
                    name={item.name}
                    email={item.email}
                    guests={item.guests}
                    date={item.date}
                  />
                )
              })
              : null}
          </tbody>
        </table>
      </main>
    </>
  )
}

Admin.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func })
}

Admin.defaultProps = {
  history: {}
}

// class Admin extends React.Component {
//   static propTypes = {
//     history: PropTypes.shape({ push: PropTypes.func })
//   }

//   static defaultProps = {
//     history: {}
//   }

//   constructor () {
//     super()
//     this.state = {
//       bookings: false
//     }
//   }

//   handleSignOut = () => {
//     firebase.auth().signOut()
//     setTimeout(() => {
//       this.props.history.push({ pathname: LOGIN })
//     }, 1000)
//   }

//   componentDidMount () {
//     this.listener = firebase.auth().onAuthStateChanged(authUser => {
//       if (authUser) {
//         db.collection('bookings')
//           .get()
//           .then(snapshot => {
//             const data = []
//             snapshot.docs.forEach(doc => {
//               data.push(doc.data())
//             })
//             const bookings = data.map(booking => {
//               booking.date = booking.date.toDate()
//               return booking
//             })
//             this.setState({ bookings })
//           })
//       } else {
//         this.props.history.push({ pathname: LOGIN })
//       }
//     })
//   }

//   componentWillUnmount () {
//     this.listener()
//   }

//   render () {
//     if (this.state.bookings) {
//       return (
//         <>
//           <Navbar />
//           <main className='container'>
//             <h1 className='title'>Bookings</h1>
//             <button className='btn' onClick={this.handleSignOut}>
//               Sign out
//             </button>
//             <table className='table'>
//               <thead>
//                 <tr className='table__row'>
//                   <th className='table__header'>Name</th>
//                   <th className='table__header'>Date</th>
//                   <th className='table__header'>Time</th>
//                   <th className='table__header'>Email</th>
//                   <th className='table__header'>Guests</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.bookings
//                   ? this.state.bookings.map(item => {
//                     return (
//                       <Booking
//                         key={item.email}
//                         name={item.name}
//                         email={item.email}
//                         guests={item.guests}
//                         date={item.date}
//                       />
//                     )
//                   })
//                   : null}
//               </tbody>
//             </table>
//           </main>
//         </>
//       )
//     } else {
//       return (
//         <>
//           <Navbar />
//           <main className='container'>
//             <h1 className='title'>Bookings</h1>
//             <Spinner />
//             <button className='btn' onClick={this.handleSignOut}>
//               Sign out
//             </button>
//           </main>
//         </>
//       )
//     }
//   }
// }

export default Admin
