import { INITIAL_BOOKING_STATE_TYPE } from "constants/booking";

export type Props = { children: React.ReactNode }
export enum ActionType {
  changeDate = "changeDate",
  changeBooking = "changeBooking",
  setBooking = "setBooking"
}

export type Action = {
  type: ActionType.changeDate | ActionType.changeBooking | ActionType.setBooking,
  payload: {
    date?: Date | [Date, Date], 
    e?: React.ChangeEvent<HTMLInputElement>
    booking?: State
  }
}

export type State = INITIAL_BOOKING_STATE_TYPE;
export type Dispatch = (action: Action) => void