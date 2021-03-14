import { ERRORS } from "constants/errors"
import { Form, Validate, ValidateEmail } from "./validate.types"

export const validateEmail: ValidateEmail = (email: string) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

export const validate: Validate = (form: Form) => {
  if (form.name.length === 0) {
    return { inputName: "name", message: ERRORS.nameInput }
  } else if (!validateEmail(form.email)) {
    return { inputName: "email", message: ERRORS.emailInput }
  }
  return false
}
