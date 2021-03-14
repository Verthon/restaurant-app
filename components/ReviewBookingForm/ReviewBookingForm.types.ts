export type Props = {
  handleEdit: () => void
  toggleModal: (arg: boolean) => void
  editable?: boolean
}

export type BookingVariables = {
  id?: number
  email?: string
  name?: string
  date?: Date
  guests?: number
}
