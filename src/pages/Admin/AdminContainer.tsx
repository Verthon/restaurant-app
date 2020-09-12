import React, { useState, useContext, useEffect } from 'react'

import { Admin } from './Admin'
import { logout } from '../../utils/login'
import db from '../../firebase'
import { getData } from '../../utils/database'
import { formatBookings } from '../../utils/helpers'
import { notifyError, notifyInfo } from '../../utils/notification'
import { DB_ERROR_MSG } from '../../constants/toastMessages'
import { BookingModalContext } from '../../context/bookingModal/BookingModalContext'
import { Params } from './Admin.types'
import { useAuthState } from '../../hooks/useAuthState/useAuthState'
import { useAuthDispatch } from '../../hooks/useAuthDispatch/useAuthDispatch'
import { setUnauthorized, startAuthorizing } from '../../context/auth/authActionCreators/authActionCreator'

export const AdminContainer = () => {
  const bookingModal = useContext(BookingModalContext)
  const [bookingDetail, setBookingDetail] = useState<any>({ id: '', data: {} })
  const [bookings, setBookings] = useState([])

  const { user, isAuthorizing } = useAuthState()
  const dispatch = useAuthDispatch()

  console.log('user in Main admin', user);

  const handleSignOut = async () => {
    dispatch(startAuthorizing())
    try {
      await logout()
      dispatch(setUnauthorized())
    } catch (error) {
      notifyError(DB_ERROR_MSG)
    }
  }

  const toggleOptions = (booking: any) => {
    setBookingDetail(booking)
    bookingModal?.toggleModal();
  }

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedBookingData = {
      ...bookingDetail.data,
      [e.target.name]: e.target.value
    }
    if (e.target.name === 'guests') {
      const updatedBookingData = {
        ...bookingDetail.data,
        [e.target.name]: parseInt(e.target.value)
      }
      setBookingDetail({
        ...bookingDetail,
        data: updatedBookingData
      })
      return
    }
    setBookingDetail({ ...bookingDetail, data: updatedBookingData })
  }

  const handleDateChange = (_date: Date, e: React.SyntheticEvent<any, Event>) => {
    const updatedBookingData = { ...bookingDetail.data, date: e }
    setBookingDetail({ ...bookingDetail, data: updatedBookingData })
  }

  const handleBookingUpdate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    const submitBooking: any = { ...bookingDetail }
    e.preventDefault()
    console.info('data to be submitted', submitBooking)
    db.collection('bookings')
      .doc(bookingDetail.id)
      .update({
        email: submitBooking.data.email,
        name: submitBooking.data.name,
        date: submitBooking.data.date,
        guests: submitBooking.data.guests,
        confirmed: true
      })
      .then(() => {
        bookingModal?.toggleModal()
        notifyInfo('Booking updated successfully.')
      })
      .catch(err => {
        console.error('Error occurred while saving to database: ', err)
        notifyError(DB_ERROR_MSG)
      })
  }

  const handleBookingDelete = () => {
    db.collection('bookings')
      .doc(bookingDetail.id)
      .delete()
      .then(() => {
        bookingModal?.toggleModal()
        notifyInfo(`Removed ${bookingDetail.data.name} booking successfully.`)
      })
      .catch(err => console.error('error in handleDelete', err))
  }

  useEffect(() => {
    if (user) {
      try {
        dispatch({ type: 'FETCHING' })
        const params: Params = {
          name: 'bookings',
          order: { name: 'date', type: 'asc' },
          limit: 20
        }
        const { order, name, limit } = params
        db.collection(name)
          .orderBy(order.name, order.type)
          .limit(limit)
          .onSnapshot(querySnapshot => {
            const booking = getData(querySnapshot)
            const allBookings: any = formatBookings(booking)
            setBookings(allBookings)
            dispatch({ type: 'SUCCESS' })
          })
      } catch (error) {
        dispatch({ type: 'ERROR' })
        notifyError(DB_ERROR_MSG)
      }}
  }, [dispatch, user])

  return (
    <Admin
      isLoading={isAuthorizing}
      handleSignOut={handleSignOut}
      bookingHandlers={{ handleBookingChange, handleBookingUpdate, handleDateChange, handleBookingDelete }}
      toggleOptions={toggleOptions}
      bookings={bookings}
      bookingDetail={bookingDetail}
      bookingModal={{ showModal: bookingModal?.showModal, toggleModal: bookingModal?.toggleModal }}
    />
  )
}
