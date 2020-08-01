import { RouteComponentProps } from "react-router-dom"
interface PropsInterface extends RouteComponentProps<any> {
  push: ({ pathname }: { pathname: string }) => void
}
export const navigateTo = (history: PropsInterface, name: string) => {
  return history.push({ pathname: name })
}
