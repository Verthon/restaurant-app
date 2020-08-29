export type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  state: {
    data: any
    isLoading: boolean
    error: null
  }
  error: {
    message: string
  }
}