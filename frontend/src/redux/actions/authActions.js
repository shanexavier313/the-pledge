import { navigate } from '@reach/router'
import axios from 'axios'
import axiosInstance from 'domains/axios'
import { API_URL } from 'domains/constants'
import { clearTokens, setTokens } from 'domains/identity'
import * as actionTypes from '../constants'
import { sendAlertMessage } from './alertActions'

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

export async function signUpAction(dispatch, data, redirectUri = 'login') {
  try {
    const response = await axios.post(API_URL + 'signup/', {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      password1: data.password,
      password2: data.passwordCon,
    })
    const messagePayload = {
      message: 'Signed up! You can now log in',
      isError: false,
    }
    sendAlertMessage(dispatch, messagePayload)
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
