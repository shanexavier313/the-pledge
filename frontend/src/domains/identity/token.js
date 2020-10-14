const TOKEN_NAME = 'authToken'

export const clearToken = () => {
  window.localStorage.removeItem(TOKEN_NAME)
}

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_NAME)
}

export const setToken = (data) => {
  window.localStorage.setItem(TOKEN_NAME, JSON.stringify(data))
}
