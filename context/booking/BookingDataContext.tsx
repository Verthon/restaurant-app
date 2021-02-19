import { createContext } from "react";
import {
  State,
  Dispatch,
  Action,
  ActionType,
} from "./BookingContext.types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.changeDate: {
      return { ...state, date: action.payload.date };
    }
    case ActionType.changeBooking: {
      const { e } = action.payload;
      if (e.target.name === "guests") {
        return { ...state, guests: parseInt(e.target.value) };
      }
      return { ...state, [e.target.name]: e.target.value };
    }
    case ActionType.setBooking: {
      return { ...action.payload.booking }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const BookingStateContext = createContext<State | undefined>(undefined);
export const BookingDispatchContext = createContext<Dispatch | undefined>(
  undefined
);
