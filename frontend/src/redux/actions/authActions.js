import { navigate } from '@reach/router'
import axiosInstance from 'domains/axios'
import { clearTokens, setTokens } from 'domains/identity'
import * as actionTypes from '../constants'
import { sendAlertMessage } from './alertActions'

export async function loginAction(
  enqueueSnackbar,
  dispatch,
  data,
  redirectUri = 'dashboard',
) {
  try {
    // enqueueSnackbar('Something went wrong during the API call. If the page does not reload correctly, please contact an administrator.', { variant: 'warning' });
    const response = await axiosInstance.post('login/', {
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
    enqueueSnackbar(messagePayload.message, { variant: 'success' })
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
      enqueueSnackbar(messagePayload.message, { variant: 'warning' })
      sendAlertMessage(dispatch, messagePayload)
    } else {
      const messagePayload = {
        message: 'Something went wrong. Please try again',
        isError: true,
      }
      enqueueSnackbar(messagePayload.message, { variant: 'warning' })
      sendAlertMessage(dispatch, messagePayload)
    }
  }
}

export async function signUpAction(
  enqueueSnackbar,
  dispatch,
  data,
  redirectUri = 'login',
) {
  try {
    const response = await axiosInstance.post('signup/', {
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
    enqueueSnackbar(messagePayload.message, { variant: 'success' })
    navigate(redirectUri)
    return { response: response.data, isError: false }
  } catch (error) {
    const messagePayload = {
      message: 'Whoops! Looks like there are some errors :(',
      isError: true,
    }
    sendAlertMessage(dispatch, messagePayload)
    enqueueSnackbar(messagePayload.message, { variant: 'warning' })
    return { response: error, isError: true }
  }
}

export function logoutAction(enqueueSnackbar, dispatch, redirectUri = 'home') {
  const messagePayload = {
    message: 'Logged out',
    isError: false,
  }
  sendAlertMessage(dispatch, messagePayload)
  enqueueSnackbar(messagePayload.message, { variant: 'success' })
  navigate(redirectUri)
  setTimeout(() => {
    clearTokens()
    dispatch({ type: actionTypes.ACTION_LOGOUT })
  }, 1)
}
