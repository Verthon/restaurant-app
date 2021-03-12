import React from "react";
import dayjs from "dayjs";
import emailjs from "emailjs-com";
import { gql } from "@apollo/client";

import { ERROR_MSG } from "constants/messages";
import { client } from "lib/apollo/apolloClient";
import { Button } from "ui/Button/Button";
import { useBookingState } from "hooks/useBooking/useBooking";
import { BookingVariables, Props } from "./ReviewBookingForm.types";
import Form from "components/Form";
import { getEmailActionUrl } from "utils/helpers";
import { showErrorNotification } from "utils/notification";

const ADD_BOOKING = gql`
  mutation(
    $email: String!
    $name: String!
    $date: timestamptz!
    $guests: smallint!
  ) {
    insert_bookings(
      objects: { email: $email, name: $name, date: $date, guests: $guests }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

const UPDATE_BOOKING = gql`
  mutation($id: Int!) {
    update_bookings(_set: { confirmed: true }, where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const ReviewBookingForm = ({ handleEdit, toggleModal, editable = false }: Props) => {
  const booking = useBookingState();
  const [loading, setLoading] = React.useState(false);

  const addBooking = async ({ variables }: { variables: BookingVariables }) => {
    return client.mutate({ mutation: ADD_BOOKING, variables });
  };

  const updateBooking = async ({
    variables,
  }: {
    variables: BookingVariables;
  }) => {
    return client.mutate({ mutation: UPDATE_BOOKING, variables });
  };

  const handleEmailSend = async (id: number) => {
    const templateParams = {
      name: booking.name,
      email: booking.email,
      guests: booking.guests,
      date: dayjs(booking.date as Date).format("DD-MMMM-YYYY HH:mm"),
    };
    try {
      await emailjs.send(
        "gmail-alkinoos",
        "reservation",
        templateParams,
        process.env.EMAIL_API_KEY
      );
      await updateBooking({ variables: { id } });
      setLoading(false);
      toggleModal(true);
    } catch (error) {
      setLoading(false);
      showErrorNotification(ERROR_MSG.emailSendFail);
    }
  };

  const handleBookingSubmit = async (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();

      if (booking) {
        setLoading(true);
        const submitBooking = { ...booking };
        const result = await addBooking({
          variables: {
            email: submitBooking.email,
            name: submitBooking.name,
            date: submitBooking.date,
            guests: submitBooking.guests,
          },
        });
        const id = result.data.insert_bookings.returning[0].id;
        await handleEmailSend(id);
      }
    } catch (error) {
      setLoading(false);
      showErrorNotification(ERROR_MSG.emailDuplicated);
    }
  };

  if (editable) {
    return ( <>
      <div className="review-booking__form">
            <Form
              booking={booking}
              handleSubmit={handleBookingSubmit}
              submitBtn={false}
              cssClass="form--edit"
              action={getEmailActionUrl(booking.email)}
              withBookingDesc={true}
            />
          </div>
          <footer className="review-booking__footer review-booking__footer--edit">
            <form onSubmit={handleBookingSubmit}>
              <Button
                variant="light"
                size="regular"
                type="submit"
                loading={loading}
              >
                Confirm Booking
              </Button>
            </form>
          </footer>
    </>

    )
  }

  return (
    <form onSubmit={handleBookingSubmit}>
      <Button
        variant="transparent"
        size="regular"
        type="button"
        onClick={handleEdit}
      >
        Edit booking
      </Button>
      <Button variant="light" size="regular" type="submit" loading={loading}>
        Confirm Booking
      </Button>
    </form>
  );
};
