import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const notify = (message) => {
  return toast(message)
}
