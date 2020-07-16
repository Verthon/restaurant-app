import { toast, PositionOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ToastOptions = {
  position: PositionOptions,
  autoClose: number | false,
  hideProgressBar: boolean,
  closeOnClick: boolean,
  pauseOnHover: boolean,
  draggable: boolean,
  progress: undefined
}

const TOAST_DEFAULT_OPTIONS: ToastOptions = {
  position: 'top-right',
  autoClose: false,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
}

export const notifyInfo = (message: string = 'Your action has been completed.', options: ToastOptions = TOAST_DEFAULT_OPTIONS) => {
  return toast.info(message, options)
}

export const notifyError = (message: string, options = TOAST_DEFAULT_OPTIONS) => {
  return toast.error(message, options)
}
