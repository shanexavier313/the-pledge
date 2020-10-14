const TOKEN_NAME = 'auth'

export const clearToken = () => {
  window.localStorage.removeItem(TOKEN_NAME)
}

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_NAME)
}

export const setToken = (data) => {
  window.localStorage.setItem(TOKEN_NAME, JSON.stringify(data))
}
