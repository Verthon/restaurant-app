import { formatMenu } from '../utils/helpers'

export const useMenu = ({ data }) => {
  if (data) {
    console.log(data)
    const menu = formatMenu(data)
    console.log('useMenu data', menu)
    return menu
  }
  return {}
}
