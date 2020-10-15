import { navigate } from '@reach/router'
import axios from 'axios'
import axiosInstance from 'domains/axios'
import { API_URL } from 'domains/constants'
import * as actionTypes from '../constants'
import { clearTokens, setTokens, getAccessToken } from 'domains/identity'

export async function loginAction(dispatch, data, redirectUri = 'dashboard') {
  try {
    const response = await axios.post(API_URL + 'login/', {
      email: data.email,
      password: data.password,
    })
    axiosInstance.defaults.headers['Authorization'] =
      'Token ' + response.data.access
    setTokens(response.data)
    dispatch({ type: actionTypes.ACTION_LOGIN_SUCCESS })

    navigate(redirectUri)

    return { response: response.data, isError: false }
  } catch (error) {
    return { response: error, isError: true }
  }
}

export function logoutAction(dispatch, redirectUri = 'home') {
  navigate(redirectUri)
  setTimeout(() => {
    clearTokens()
    dispatch({ type: actionTypes.ACTION_LOGOUT })
  }, 1)
}
