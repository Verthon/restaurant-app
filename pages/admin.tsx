import React from "react"
import { motion } from "framer-motion"

import Form from "components/Form"
import { Button } from "ui/Button/Button"
import { Navbar } from "ui/Navbar/Navbar"
import { BookingsTable } from "ui/BookingsTable/BookingsTable"
import { Modal } from "ui/Modal/Modal"
import { PageTransition } from "ui/PageTransition/PageTransition"

import { useBookingModalDispatch, useBookingModalState } from "hooks/useBookingModal/useBookingModal"
import { ActionType } from "context/bookingModal/BookingModalContext.types"
import { useBookingDispatch, useBookingState } from "hooks/useBooking/useBooking"

import { setBooking } from "context/booking/BookingActionCreator"
import { useNotification } from "hooks/useNotification/useNotification"
import { Heading } from "ui/Heading/Heading"
import { Text } from "ui/Text/Text"
import { Booking } from "constants/booking"
import { useRouter } from "next/router"
import { ROUTES } from "constants/routes"

type Props = {
  isLoading: boolean
  bookings: Booking[]
}

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: ROUTES.login,
    },
  }
}

export default function AdminPage({ bookings }: Props) {
  const adminLinks = [
    { name: "Bookings", link: "bookings" },
    { name: "Storage", link: "storage" },
  ]
  const dispatchModal = useBookingModalDispatch()
  const { showModal } = useBookingModalState()
  const booking = useBookingState()
  const dispatch = useBookingDispatch()
  const showNotification = useNotification()
  const router = useRouter()

  const deleteBooking = () => {
    try {
      dispatchModal({ type: ActionType.hide })
      showNotification({ type: "success", message: "Booking deleted successfully." })
    } catch (error) {
      showNotification({ type: "error", message: "Failed to delete booking, please try again later." })
    }
  }

  const logout = async () => {
    return 2
  }

  const updateBooking = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    try {
      dispatchModal({ type: ActionType.hide })
      showNotification({ type: "success", message: "Booking was updated successfully." })
    } catch (error) {
      showNotification({ type: "error", message: "Failed to update booking, please try again later" })
    }
  }

  const toggleOptions = (booking: Booking) => {
    dispatch(setBooking(booking))
    dispatchModal({ type: ActionType.show })
  }

  const handleRedirect = () => {
    router.push(ROUTES.home)
  }

  const handleLogout = async () => {
    await logout()
    handleRedirect()
  }

  return (
    <PageTransition>
      <Modal show={showModal}>
        <div className="modal-book__nav">
          <button className="modal-book__close" onClick={() => dispatchModal({ type: ActionType.hide })}>
            <img src="/assets/icons/close-circle.svg" height="35px" width="35px" />
          </button>
        </div>
        <Heading level="h2">Booking action</Heading>
        <Text className="modal-book__text">
          Choose an action for <strong>{booking.name}</strong> booking.
        </Text>
        <p className="text modal-book__text">Both edit or delete process cannot be undone.</p>
        <div className="admin__form-container">
          <Form
            booking={booking}
            handleSubmit={updateBooking}
            submitBtn={false}
            cssClass="form--edit"
            action=""
            withBookingDesc={false}
          />
        </div>
        <footer className="modal-book__footer">
          <Button variant="transparent" size="regular" onClick={deleteBooking}>
            Delete
          </Button>
          <Button variant="light" size="regular" type="submit" onClick={updateBooking}>
            Update
          </Button>
        </footer>
      </Modal>
      <Navbar admin hashlink links={adminLinks}>
        <Button variant="light" size="small" onClick={handleLogout}>
          Sign out
        </Button>
      </Navbar>
      <motion.main className="container admin__container" initial="exit" animate="enter" exit="exit">
        <Heading level="h2" id="bookings">
          Bookings
        </Heading>
        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          <BookingsTable bookings={bookings as any} toggleOptions={toggleOptions} />
        )}
        <Heading level="h2" id="storage">
          Storage
        </Heading>
      </motion.main>
    </PageTransition>
  )
}
