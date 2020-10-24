import { navigate } from '@reach/router'
import axiosInstance from 'domains/axios'
import { clearTokens, setTokens } from 'domains/identity'
import * as actionTypes from '../constants'
import { sendAlertMessage } from './alertActions'
import { getUser } from 'domains/identity'

export async function loginAction(
  enqueueSnackbar,
  dispatch,
  data,
  redirectUri = 'dashboard',
) {
  try {
    const response = await axiosInstance.post('auth/jwt/create/', {
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
    dispatch({ type: actionTypes.ACTION_LOGIN_SUCCESS, user: getUser() })
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

export async function signUpAction(
  enqueueSnackbar,
  dispatch,
  data,
  redirectUri = 'login',
) {
  try {
    console.log(data)
    const response = await axiosInstance.post('auth/users/', {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      password: data.password,
      re_password: data.passwordCon,
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

export async function updateAccountAction(
  dispatch,
  data,
  redirectUri = 'account',
) {
  try {
    const response = await axiosInstance.put(`auth/users/me`, {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      password1: data.password,
      password2: data.passwordCon,
    })
    const messagePayload = {
      message: 'Account updated!',
      isError: false,
    }
    dispatch({
      type: actionTypes.ACTION_USER_UPDATE_SUCCESS,
      data: {
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
      },
    })
    sendAlertMessage(dispatch, messagePayload)
    navigate(redirectUri)
    return { response: response.data, isError: false }
  } catch (error) {
    return { response: error, isError: true }
  }
}
