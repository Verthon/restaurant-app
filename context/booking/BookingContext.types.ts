import { INITIAL_BOOKING_STATE_TYPE } from "constants/booking";

export type Props = { children: React.ReactNode }
export enum ActionType {
  changeDate = "changeDate",
  changeBooking = "changeBooking"
}

export type Action = {
  type: ActionType.changeDate | ActionType.changeBooking,
  payload: {
    date?: Date | [Date, Date], 
    e?: React.ChangeEvent<HTMLInputElement>
  }
}

export type State = INITIAL_BOOKING_STATE_TYPE;
export type Dispatch = (action: Action) => void