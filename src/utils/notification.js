import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TOAST_DEFAULT_OPTIONS = {
  position: 'top-right',
  autoClose: false,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
}

export const notifyInfo = (message = 'Your action has been completed.', options = TOAST_DEFAULT_OPTIONS) => {
  return toast.info(message, options)
}

export const notifyError = (message, options = TOAST_DEFAULT_OPTIONS) => {
  return toast.error(message, options)
}
