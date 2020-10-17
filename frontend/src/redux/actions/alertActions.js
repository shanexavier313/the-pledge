import * as actionTypes from '../constants'

export function sendAlertMessage(dispatch, payload) {
  dispatch({
    type: actionTypes.ALERT_MESSAGE,
    payload: payload,
  })
}
