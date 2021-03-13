export type Form = { name: string; email: string }
export type ValidateEmail = (email: string) => boolean
export type Validate = (form: Form) => boolean | { inputName: string; message: string }
