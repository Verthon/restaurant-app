import { errorMsg } from 'constants/errors'

export const validateEmail = (email: string) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

type Form = { name: string; email: string }

export const validate = (form: Form) => {
  if (form.name.length === 0) {
    return { inputName: 'name', message: errorMsg.name }
  } else if (!validateEmail(form.email)) {
    return { inputName: 'email', message: errorMsg.email }
  }
  return false
}
