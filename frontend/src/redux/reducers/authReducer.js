import * as actionTypes from '../constants'
const initialState = {
  isLoggedIn: false,
  user: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_LOGIN_SUCCESS:
      const { user } = action;
      return {
        ...state,
        isLoggedIn: true,
        user
      }
    case actionTypes.ACTION_USER_UPDATE_SUCCESS:
      debugger;
      const { data } = action;
      return {
        ...state,
        isLoggedIn: true,
        user: { ...state.user, ...data }
      }
    case actionTypes.ACTION_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: false
      }
    default:
      return state
  }
}

export default authReducer
