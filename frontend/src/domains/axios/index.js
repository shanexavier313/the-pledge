import axios from 'axios'
import { setTokens, getAccessToken, getRefreshToken } from '../identity/token'
import { API_URL } from '../constants'

const access_token = getAccessToken()

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    Authorization: access_token ? 'Token ' + access_token : null,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
})

// This function is used to automatically get a new access token so the user can stay logged in
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config

    // Prevent infinite loops if keeps failing to authorize
    if (
      error.response.status === 401 &&
      originalRequest.url === API_URL + 'token/refresh/'
    ) {
      window.location.href = '/login/'
      return Promise.reject(error)
    }

    if (
      error.response.data.code === 'token_not_valid' &&
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
      const refreshToken = getRefreshToken()

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]))

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000)
        console.log(tokenParts.exp)

        if (tokenParts.exp > now) {
          return axiosInstance
            .post('/token/refresh/', { refresh: refreshToken })
            .then((response) => {
              setTokens(response.data)
              axiosInstance.defaults.headers['Authorization'] =
                'Token ' + response.data.access
              originalRequest.headers['Authorization'] =
                'Token ' + response.data.access

              return axiosInstance(originalRequest)
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('Refresh token is expired', tokenParts.exp, now)
          window.location.href = '/login/'
        }
      } else {
        console.log('Refresh token not available.')
        window.location.href = '/login/'
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error)
  },
)

export default axiosInstance
