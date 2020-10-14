import { getToken } from './token'

export const getUser = () => {
  const auth = JSON.parse(getToken())
  if (auth) {
    const [, payload] = auth.access.split('.')
    const decoded = window.atob(payload)
    return JSON.parse(decoded)
  }
  return undefined
}
