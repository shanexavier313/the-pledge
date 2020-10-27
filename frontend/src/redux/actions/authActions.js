import { navigate } from '@reach/router'
import axiosInstance from 'domains/axios'
import { clearTokens, getAccessToken, setTokens } from 'domains/identity'
import * as actionTypes from '../constants'
import { sendAlertMessage } from './alertActions'

export const checkAuthenticatedAction = async (dispatch) => {
  if (typeof window == 'undefined') {
    dispatch({
      type: actionTypes.AUTHENTICATED_FAIL,
    })
  }

  const body = JSON.stringify({ token: getAccessToken() })

  try {
    const response = await axiosInstance.post('/auth/jwt/verify/', body)

    if (response.data.code !== 'token_not_valid') {
      dispatch({
        type: actionTypes.AUTHENTICATED_SUCCESS,
      })
    } else {
      dispatch({
        type: actionTypes.AUTHENTICATED_FAIL,
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.AUTHENTICATED_FAIL,
    })
  }
}

export const loadUserAction = async (dispatch) => {
  try {
    const response = await axiosInstance.get('/auth/users/me/')

    dispatch({
      type: actionTypes.USER_LOADED_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LOADED_FAIL,
    })
  }
}

export const loginAction = async (
  enqueueSnackbar,
  dispatch,
  data,
  redirectUri = '/',
) => {
  const body = JSON.stringify({ email: data.email, password: data.password })

  try {
    const response = await axiosInstance.post('/auth/jwt/create/', body)
    axiosInstance.defaults.headers['Authorization'] =
      'Token ' + response.data.access
    setTokens(response.data)
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: response.data,
    })
    loadUserAction(dispatch)

    const messagePayload = {
      message: 'Logged in!',
      isError: false,
    }
    enqueueSnackbar(messagePayload.message, { variant: 'success' })
    navigate(redirectUri)
  } catch (error) {
    console.log(dispatch)
    const data = error.response
    dispatch({
      type: actionTypes.LOGIN_FAIL,
    })
    if (data.status === 401) {
      const messagePayload = {
        message: 'Your email or password was incorrect. Please try again',
        isError: true,
      }
      enqueueSnackbar(messagePayload.message, { variant: 'warning' })
      // sendAlertMessage(dispatch, messagePayload)
    } else {
      const messagePayload = {
        message: 'Something went wrong. Please try again',
        isError: true,
      }
      enqueueSnackbar(messagePayload.message, { variant: 'warning' })
      // sendAlertMessage(dispatch, messagePayload)
    }
  }
}

export const signUpAction = async (
  enqueueSnackbar,
  dispatch,
  data,
  redirectUri = 'login',
) => {
  const body = JSON.stringify({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: data.password,
    re_password: data.passwordCon,
  })

  try {
    const response = await axiosInstance.post('/auth/users/', body)

    dispatch({
      type: actionTypes.SIGNUP_SUCCESS,
      payload: response.data,
    })

    const messagePayload = {
      message: 'Signed up! Check your email to activate your account. You won’t be able to login until you do so.',
      isError: false,
    }
    sendAlertMessage(dispatch, messagePayload)
    // enqueueSnackbar(messagePayload.message, { variant: 'success' })
    navigate(redirectUri)
  } catch (error) {
    dispatch({
      type: actionTypes.SIGNUP_FAIL,
    })
    const messagePayload = {
      message: 'Whoops! Looks like there are some errors :(',
      isError: true,
    }
    // sendAlertMessage(dispatch, messagePayload)
    enqueueSnackbar(messagePayload.message, { variant: 'warning' })
    return { response: error, isError: true }
  }
}

export const activateAction = async (
  data,
  dispatch,
  enqueueSnackbar,
  redirectUri = '/login',
) => {
  const body = JSON.stringify({ uid: data.uid, token: data.token })

  try {
    const response = await axiosInstance.post('/auth/users/activation/', body)

    dispatch({
      type: actionTypes.ACTIVATION_SUCCESS,
      payload: response.data,
    })

    const messagePayload = {
      message: 'Account activated! You can now log in.',
      isError: false,
    }
    enqueueSnackbar(messagePayload.message, { variant: 'success' })
    navigate(redirectUri)
  } catch (error) {
    const messagePayload = {
      message:
        'Something went wrong. Retry the activation link or contact us :(',
      isError: true,
    }
    // sendAlertMessage(dispatch, messagePayload)
    enqueueSnackbar(messagePayload.message, { variant: 'warning' })
  }
}

export const resetPasswordAction = async (
  data,
  dispatch,
  enqueueSnackbar,
  redirectUri = '/login',
) => {
  const body = JSON.stringify({ email: data.email })

  try {
    const response = await axiosInstance.post(
      '/auth/users/reset_password/',
      body,
    )

    dispatch({
      type: actionTypes.RESET_PASSWORD_SUCCESS,
      payload: response.data,
    })
    const messagePayload = {
      message: 'A password reset link has been sent to your email!',
      isError: false,
    }
    enqueueSnackbar(messagePayload.message, { variant: 'success' })
    navigate(redirectUri)
  } catch (error) {
    const messagePayload = {
      message: 'Whoops! Looks like there are some errors :(',
      isError: true,
    }
    // sendAlertMessage(dispatch, messagePayload)
    enqueueSnackbar(messagePayload.message, { variant: 'warning' })
    return { response: error, isError: true }
  }
}

export const resetPasswordConfirmAction = async (
  data,
  dispatch,
  enqueueSnackbar,
  redirectUri = '/login',
) => {
  const body = JSON.stringify({
    uid: data.uid,
    token: data.token,
    new_password: data.password,
    re_new_password: data.passwordCon,
  })

  try {
    const response = await axiosInstance.post(
      '/auth/users/reset_password_confirm/',
      body,
    )

    dispatch({
      type: actionTypes.RESET_PASSWORD_CONFIRM_SUCCESS,
      payload: response.data,
    })

    const messagePayload = {
      message: 'Password has been reset! You can now log in.',
      isError: false,
    }
    enqueueSnackbar(messagePayload.message, { variant: 'success' })
    navigate(redirectUri)
  } catch (error) {
    const messagePayload = {
      message: 'Whoops! Looks like there are some errors :(',
      isError: true,
    }
    // sendAlertMessage(dispatch, messagePayload)
    enqueueSnackbar(messagePayload.message, { variant: 'warning' })
    return { response: error, isError: true }
  }
}

export const updateAccountAction = async (
  dispatch,
  data,
  redirectUri = 'account',
) => {
  try {
    const response = await axiosInstance.put(`auth/users/me/`, {
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
      payload: {
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

export const logoutAction = (enqueueSnackbar, dispatch, redirectUri = '/') => {
  const messagePayload = {
    message: 'Logged out.',
    isError: false,
  }
  enqueueSnackbar(messagePayload.message, { variant: 'success' })
  navigate(redirectUri)
  setTimeout(() => {
    clearTokens()
    dispatch({ type: actionTypes.LOGOUT })
  }, 1)
}
