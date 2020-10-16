import axios from 'axios'
import { navigate } from '@reach/router'
import { API_URL } from '../../domains/constants'

export async function signUp(data, redirectUri = 'login') {
  try {
    const response = await axios.post(API_URL + 'signup/', {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      password1: data.password,
      password2: data.passwordCon,
    })
    // navigate(redirectUri)
    return { response: response.data, isError: false }
  } catch (error) {
    return { response: error, isError: true }
  }
}
