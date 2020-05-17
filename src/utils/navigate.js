export const navigateTo = (history, name) => {
  setTimeout(() => {
    history.push({ pathname: name })
  }, 1000)
}
