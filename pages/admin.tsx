import React from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { gql } from "@apollo/client";
import Image from "next/image";

import { client } from "lib/apollo/apolloClient";
import { Navbar } from "ui/Navbar/Navbar";
import { BookingsTable } from "ui/BookingsTable/BookingsTable";
import { Modal } from "ui/Modal/Modal";
import Form from "components/Form";
import { Button } from "ui/Button/Button";
import auth0 from "./api/utils/auth0";
import {
  useBookingModalDispatch,
  useBookingModalState,
} from "hooks/useBookingModal/useBookingModal";
import { ActionType } from "context/bookingModal/BookingModalContext.types";
import { useBookingDispatch, useBookingState } from "hooks/useBooking/useBooking";
import { notifyError, notifyInfo } from "utils/notification";
import { DB_ERROR_MSG } from "constants/toastMessages";
import { Booking } from "constants/booking";
import { IClaims } from "@auth0/nextjs-auth0/dist/session/session";
import { NextApiRequest } from "next";
import { setBooking } from "context/booking/BookingActionCreator";

type Props = {
  user?: IClaims
  isLoading: boolean
  bookings: Booking[]
}

const UPDATE_BOOKING = gql`
  mutation(
    $id: Int!
    $confirmed: Boolean!
    $name: String!
    $email: String!
    $date: timestamptz!
    $guests: smallint!
  ) {
    update_bookings(
      _set: {
        confirmed: $confirmed
        name: $name
        email: $email
        date: $date
        guests: $guests
      }
      where: { id: { _eq: $id } }
    ) {
      affected_rows
    }
  }
`;

const DELETE_BOOKING = gql`
  mutation($bookingId: Int) {
    delete_bookings(where: { id: { _eq: $bookingId } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

const SUBSCRIBE_BOOKINGS = gql`
  query SubscribeBookings {
    bookings(limit: 20, order_by: { date: desc }) {
      id
      name
      guests
      email
      date
      confirmed
    }
  }
`;

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const session = await auth0.getSession(req);
  const { data, loading } = await client.query({ query: SUBSCRIBE_BOOKINGS });

  return {
    props: {
      user: session?.user || null,
      isLoading: loading,
      bookings: data.bookings,
    },
  };
}

export default function AdminPage({ user, bookings, isLoading }: Props) {
  const adminLinks = [
    { name: "Bookings", link: "bookings" },
    { name: "Storage", link: "storage" },
  ];
  const dispatchModal = useBookingModalDispatch();
  const { showModal } = useBookingModalState();
  const booking = useBookingState();
  const dispatch = useBookingDispatch();
  const [loading, setLoading] = React.useState(!!isLoading);

  const deleteBooking = () => {
    try {
      setLoading(true);
      client.mutate({
        mutation: DELETE_BOOKING,
        variables: { bookingId: booking.id },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      notifyError(DB_ERROR_MSG);
    }
  };

  const updateBooking = async (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      setLoading(true);
      await client.mutate({
        mutation: UPDATE_BOOKING,
        variables: {
          id: booking.id,
          email: booking.email,
          name: booking.name,
          date: booking.date,
          guests: booking.guests,
          confirmed: true,
        },
      });
      dispatchModal({ type: ActionType.hide });
      notifyInfo("Booking updated successfully.");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      notifyError(DB_ERROR_MSG);
    }
  };

  const toggleOptions = (booking: Booking) => {
    dispatch(setBooking(booking))
    dispatchModal({ type: ActionType.show });
  };

  return (
    <>
      <ToastContainer
        className="toast__container"
        toastClassName="toast"
        progressClassName="toast__progress"
      />
      <Modal show={showModal}>
        <div className="modal-book__nav">
          <button
            className="modal-book__close"
            onClick={() => dispatchModal({ type: ActionType.hide })}
          >
            <img
              src="/assets/icons/close-circle.svg"
              height="35px"
              width="35px"
            />
          </button>
        </div>
        <h2 className="heading modal-book__heading">Booking action</h2>
        <p className="text modal-book__text">
          Choose an action for <strong>{booking.name}</strong> booking.
        </p>
        <p className="text modal-book__text">
          Both edit or delete process cannot be undone.
        </p>
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
          <Button
            variant="transparent"
            size="regular"
            onClick={deleteBooking}
            loading={loading}
          >
            Delete
          </Button>
          <Button
            variant="light"
            size="regular"
            type="submit"
            onClick={updateBooking}
            loading={loading}
          >
            Update
          </Button>
        </footer>
      </Modal>
      <Navbar admin hashlink links={adminLinks}>
        {/* <Button variant="light" size="small" onClick={handleSignOut} >
          Sign out
        </Button> */}
      </Navbar>
      <motion.main
        className="container admin__container"
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <h2 className="admin__title" id="bookings">
          Bookings
        </h2>
        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          <BookingsTable bookings={bookings as any} toggleOptions={toggleOptions} />
        )}
        <h2 className="admin__title" id="storage">
          Storage
        </h2>
      </motion.main>
    </>
  );
}
