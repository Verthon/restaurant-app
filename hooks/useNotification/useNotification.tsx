import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Options } from "./useNotification.types"

const DURATION = 4000

export const useNotification = () => {
  const showNotification = ({ type, message }: Options) => {
    toast[type](message, {
      draggable: false,
      autoClose: DURATION,
      hideProgressBar: true,
    })
  }

  return showNotification
}
