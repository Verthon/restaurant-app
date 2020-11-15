import React, { useState, useContext, useEffect } from 'react'
import NProgress from 'nprogress'

import { Admin } from './Admin'
import { getData } from '../../utils/database'
import { formatBookings } from '../../utils/helpers'
import { notifyError, notifyInfo } from '../../utils/notification'
import { DB_ERROR_MSG } from '../../constants/toastMessages'
import { BookingModalContext } from '../../context/bookingModal/BookingModalContext'
import { useAuth0 } from '@auth0/auth0-react'

export const AdminContainer = () => {
  const { logout, isAuthenticated, isLoading } = useAuth0();
  const bookingModal = useContext(BookingModalContext)
  const [bookingDetail, setBookingDetail] = useState<any>({ id: '', data: {} })
  const [bookings, setBookings] = useState([])

  const handleSignOut = async () => {
    NProgress.start()
    try {
      logout()
      NProgress.done()
    } catch (error) {
      notifyError(DB_ERROR_MSG)
      NProgress.done()
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

  return (
    <Admin
      isLoading={isLoading}
      handleSignOut={handleSignOut}
      toggleOptions={toggleOptions}
      bookings={bookings}
      bookingDetail={bookingDetail}
      bookingModal={{ showModal: bookingModal?.showModal, toggleModal: bookingModal?.toggleModal }}
    />
  )
}
