import { RouteComponentProps } from 'react-router-dom';
export const navigateTo = (history: RouteComponentProps, name: string) => {
  setTimeout(() => {
    history.push({ pathname: name })
  }, 1000)
}
