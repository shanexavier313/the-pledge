const ACCESS_TOKEN_NAME = 'access_token'
const REFRESH_TOKEN_NAME = 'refresh_token'

export const clearTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_NAME)
  localStorage.removeItem(REFRESH_TOKEN_NAME)
}

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_NAME)
}

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_NAME)
}

export const setTokens = (data) => {
  localStorage.setItem(ACCESS_TOKEN_NAME, data.access)
  localStorage.setItem(REFRESH_TOKEN_NAME, data.refresh)
}
