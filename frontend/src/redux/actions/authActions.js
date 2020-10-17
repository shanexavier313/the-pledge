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
    const messagePayload = {
      message: 'Logged in!',
      isError: false,
    }
    dispatch({ type: actionTypes.ACTION_LOGIN_SUCCESS })
    sendAlertMessage(dispatch, messagePayload)
    navigate(redirectUri)
  } catch (error) {
    const data = error.response
    if (data.status === 401) {
      const messagePayload = {
        message: 'Your email or password was incorrect. Please try again',
        isError: true,
      }
      sendAlertMessage(dispatch, messagePayload)
    } else {
      const messagePayload = {
        message: 'Something went wrong. Please try again',
        isError: true,
      }
      sendAlertMessage(dispatch, messagePayload)
    }
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
    const messagePayload = {
      message: 'Whoops! Looks like there are some errors :(',
      isError: true,
    }
    sendAlertMessage(dispatch, messagePayload)
    return { response: error, isError: true }
  }
}

export function logoutAction(dispatch, redirectUri = 'home') {
  const messagePayload = {
    message: 'Logged out',
    isError: false,
  }
  sendAlertMessage(dispatch, messagePayload)
  navigate(redirectUri)
  setTimeout(() => {
    clearTokens()
    dispatch({ type: actionTypes.ACTION_LOGOUT })
  }, 1)
}
