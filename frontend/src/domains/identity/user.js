import { getAccessToken } from './token'

export const getUser = () => {
  const accessToken = getAccessToken()
  if (accessToken) {
    const [, payload] = accessToken.split('.')
    const decoded = window.atob(payload)
    
    console.log(decoded)
    return JSON.parse(decoded)
  }
  return undefined
}
