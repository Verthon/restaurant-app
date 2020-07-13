import { errorMsg } from '../constants/errors'

export const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

export const validate = (form) => {
  if (form.name.length === 0) {
    return { inputName: 'name', message: errorMsg.name }
  } else if (!validateEmail(form.email)) {
    return { inputName: 'email', message: errorMsg.email }
  }
  return false
}
