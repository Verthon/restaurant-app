export const navigateTo = (history: { pathname: string; }[], name: string) => {
  setTimeout(() => {
    history.push({ pathname: name })
  }, 1000)
}
