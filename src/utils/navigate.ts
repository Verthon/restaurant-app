export const navigateTo = (history: { pathname: string; }[], name: string) => {
  return history.push({ pathname: name })
}
