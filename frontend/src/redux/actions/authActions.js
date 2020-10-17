import { navigate } from '@reach/router'
import axiosInstance from 'domains/axios'
import { API_URL } from 'domains/constants'
import {
  clearTokens,
  setTokens,
  getAccessToken,
} from 'domains/identity'
import * as actionTypes from '../constants';

export async function loginAction(dispatch, credential, redirectUri = 'dashboard') {
	try {
    const response = await axiosInstance.post('login/', credential)
    const data = response.data
    axiosInstance.defaults.headers['Authorization'] = 'Token ' + data.access
    setTokens(data)
    dispatch({ type: actionTypes.ACTION_LOGIN_SUCCESS });
    navigate(redirectUri)
    return { data, isError: false }
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
