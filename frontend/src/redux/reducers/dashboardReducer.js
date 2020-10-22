import * as actionTypes from '../constants'
const initialState = {
  calls: [],
  recipients: [],
  loading: false,
  error: false,
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_LOAD_CALLS:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.ACTION_LOAD_CALLS_SUCCESS:
      const { calls } = action
      return {
        ...state,
        calls,
        loading: false,
      }
    case actionTypes.ACTION_LOAD_RECIPIENTS_SUCCESS:
      const { recipients } = action
      return {
        ...state,
        recipients,
        loading: false,
      }
    case actionTypes.ACTION_LOAD_CALLS_FAIL: {
      const { error } = action
      return {
        ...state,
        calls: [],
        loading: false,
        error,
      }
    }
    case actionTypes.ACTION_LOAD_RECIPIENTS_FAIL: {
      const { error } = action
      return {
        ...state,
        recipients: [],
        loading: false,
        error,
      }
    }
    case actionTypes.ACTION_CREATE_RECIPIENTS_SUCCESS: {
      const { recipient } = action
      let { recipients } = state
      recipients.push(recipient)
      debugger
      return {
        ...state,
        recipients,
      }
    }
    default:
      return state
  }
}

export default dashboardReducer
