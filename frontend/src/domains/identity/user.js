import { getAccessToken } from './token'

export const getUser = () => {
  const accessToken = JSON.parse(getAccessToken())
  if (accessToken) {
    const [, payload] = accessToken.split('.')
    const decoded = window.atob(payload)
    return JSON.parse(decoded)
  }
  return undefined
}
