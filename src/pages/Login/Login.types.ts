export type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error: boolean
  loading: boolean
}