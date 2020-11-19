import React, { useState, useContext, useEffect } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import NProgress from 'nprogress'

import { Admin } from './Admin'
import { notifyError, notifyInfo } from '../../utils/notification'
import { DB_ERROR_MSG } from '../../constants/toastMessages'
import { BookingModalContext } from '../../context/bookingModal/BookingModalContext'
import { useAuth0 } from '@auth0/auth0-react'

const GET_BOOKINGS = gql`
  query GetTestimonials {
    bookings(limit: 20, order_by: {date: desc}) {
      id
      name
      guests
      email
      date
      confirmed
    }
  }
`

const UPDATE_BOOKING = gql`
  mutation ($id: Int!, $confirmed: Boolean!, $name: String!, $email: String!, $date: timestamptz!, $guests: smallint!) {
    update_bookings(_set: {confirmed: $confirmed, name: $name, email: $email, date: $date, guests: $guests}, where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`

const DELETE_BOOKING = gql`
  mutation ($bookingId: Int) {
    delete_bookings(where: {id:{_eq:$bookingId}}) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export const AdminContainer = () => {
  const { logout, isLoading } = useAuth0()
  const { data, loading } = useQuery(GET_BOOKINGS)
  const [updateBooking, { loading: updateBookingLoading }] = useMutation(UPDATE_BOOKING, {ignoreResults: false})
  const [ deleteBooking, { loading: deleteBookingLoading }] = useMutation(DELETE_BOOKING)
  const bookingModal = useContext(BookingModalContext)
  const [bookingDetail, setBookingDetail] = useState<any>({})
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

  const handleBookingUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const submitBooking: any = { ...bookingDetail }
    console.log('submitBooking', submitBooking)
    try {
      await updateBooking({ variables: {id: bookingDetail.id, email: submitBooking.email,
        name: submitBooking.name,
        date: submitBooking.date,
        guests: submitBooking.guests,
        confirmed: true} })
      bookingModal?.toggleModal()
      notifyInfo('Booking updated successfully.')
    } catch(error) {
      notifyError(DB_ERROR_MSG)
    }
  }

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedBookingData = {
      ...bookingDetail,
      [e.target.name]: e.target.value
    }
    if (e.target.name === 'guests') {
      const updatedBookingData = {
        ...bookingDetail,
        [e.target.name]: parseInt(e.target.value)
      }
      setBookingDetail({
        ...bookingDetail,
        ...updatedBookingData
      })
      return
    }
    setBookingDetail({ ...bookingDetail, ...updatedBookingData })
  }

  const handleDateChange = (date: Date) => {
    const updatedBookingData = { ...bookingDetail, date }
    setBookingDetail({ ...bookingDetail, ...updatedBookingData })
    console.log('updatedBookingData', updatedBookingData)
  }

  const handleBookingDelete = async () => {
    try {
      deleteBooking({variables: { bookingId: bookingDetail.id}})
    } catch(error) {
      notifyError(DB_ERROR_MSG)
    }
  }

  useEffect(() => {
    if(data) {
      const bookings = data.bookings.map((booking: any) => ({...booking, date: new Date(booking.date)}));
      setBookings(bookings)
    }
  }, [data])

  return (
    <Admin
      isLoading={isLoading || loading || updateBookingLoading || deleteBookingLoading}
      handleSignOut={handleSignOut}
      toggleOptions={toggleOptions}
      bookings={bookings}
      bookingDetail={bookingDetail}
      bookingModal={{ showModal: bookingModal?.showModal, toggleModal: bookingModal?.toggleModal }}
      bookingHandlers={{ handleBookingChange, handleBookingUpdate, handleDateChange, handleBookingDelete }}
    />
  )
}
