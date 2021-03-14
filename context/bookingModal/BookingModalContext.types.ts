export type Props = { children: React.ReactNode }
export enum ActionType {
  show = "show",
  hide = "hide",
}

export type Action = {
  type: ActionType.show | ActionType.hide
}

export type State = {
  showModal: boolean
}

export type Dispatch = (action: Action) => void
