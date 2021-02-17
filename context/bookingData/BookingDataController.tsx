import React from "react";

import {
  BookingDataState,
  BookingDataDispatch,
} from "./BookingDataContext";
import { Props } from "./BookingDataContext.types"
import { reducer } from "./BookingDataContext"
import { INITIAL_BOOKING_STATE } from "constants/booking";

export const BookingDataController = ({ children }: Props) => {
  const booking = { ...INITIAL_BOOKING_STATE }
  const [state, dispatch] = React.useReducer(reducer, booking)

  return (
    <BookingDataState.Provider
      value={state}
    >
      <BookingDataDispatch.Provider
        value={dispatch}
      >
        {children}
      </BookingDataDispatch.Provider>
    </BookingDataState.Provider>
  );
};
