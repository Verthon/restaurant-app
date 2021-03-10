import React from 'react';

export const ReviewBookingForm = () => {

  const addBooking = async ({ variables }: { variables: BookingVariables }) => {
    return client.mutate({ mutation: ADD_BOOKING, variables });
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


  return (
    <form onSubmit={handleBookingSubmit}>
              <Button
                variant="transparent"
                size="regular"
                type="button"
                onClick={handleBookingEdit}
              >
                Edit booking
              </Button>
              <Button
                variant="light"
                size="regular"
                type="submit"
                loading={false}
              >
                Confirm Booking
              </Button>
            </form>
  );
};