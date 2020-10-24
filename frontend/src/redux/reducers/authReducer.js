import * as actionTypes from '../constants'
const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isLoggedIn: null,
  user: null,
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      }
    case actionTypes.ACTION_USER_UPDATE_SUCCESS:
      return {
        ...state,
        user: {
          email: payload.email,
          first_name: payload.first_name,
          last_name: payload.last_name,
        },
      }
    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access)
      return {
        ...state,
        isLoggedIn: true,
        access: payload.access,
        refresh: payload.refresh,
      }
    case actionTypes.USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      }
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      }
    case actionTypes.AUTHENTICATED_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      }
    case actionTypes.USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      }
    case actionTypes.SIGNUP_FAIL:
    case actionTypes.LOGIN_FAIL:
    case actionTypes.LOGOUT:
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      return {
        ...state,
        access: null,
        refresh: null,
        isLoggedIn: false,
        user: null,
      }
    default:
      return state
  }
}

export default authReducer
