import * as actionTypes from '../constants'

const initialState = {
  message: null,
  isError: false,
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALERT_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
        isError: action.payload.isError,
      }
    default:
      return state
  }
}

export default alertReducer
