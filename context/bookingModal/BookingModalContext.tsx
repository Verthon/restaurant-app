import React from "react"

import { State, Dispatch, Action, ActionType } from "./BookingModalContext.types"

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.show: {
      return { ...state, showModal: true }
    }
    case ActionType.hide: {
      return { ...state, showModal: false }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const BookingModalStateContext = React.createContext<State | undefined>(undefined)
export const BookingModalDispatchContext = React.createContext<Dispatch | undefined>(undefined)
