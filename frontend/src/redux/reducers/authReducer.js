import * as actionTypes from '../constants'
const initialState = { isLoggedIn: false }

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      }
    case actionTypes.ACTION_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

export default usersReducer
