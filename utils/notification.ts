import { ERROR_MSG } from "constants/messages"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

type ToastOptions = {
  position: "top-right" | "top-left"
  autoClose: number | false
  hideProgressBar: boolean
  closeOnClick: boolean
  pauseOnHover: boolean
  draggable: boolean
  progress: undefined
}

const TOAST_DEFAULT_OPTIONS: ToastOptions = {
  position: "top-right",
  autoClose: false,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const showNotification = (
  message = "Your action has been completed.",
  options: ToastOptions = TOAST_DEFAULT_OPTIONS
) => {
  return toast.info(message, options)
}

export const showErrorNotification = (message = ERROR_MSG.default, options = TOAST_DEFAULT_OPTIONS) => {
  return toast.error(message, options)
}
