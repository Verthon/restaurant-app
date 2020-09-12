export type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<boolean>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error: boolean
  loading: boolean
}