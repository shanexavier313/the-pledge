import axiosInstance from 'domains/axios'
import { API_URL } from 'domains/constants'
import { getUser } from 'domains/identity/user'
import * as actionTypes from '../constants';

export async function loadCallsAction(dispatch) {
	try {
    dispatch({ type: actionTypes.ACTION_LOAD_CALLS });
    const response = await axiosInstance.get('calls/')
    const calls = response.data
    dispatch({ type: actionTypes.ACTION_LOAD_CALLS_SUCCESS, calls });
  } catch (error) {
    console.log(error)
    dispatch({ type: actionTypes.ACTION_LOAD_CALLS_FAIL, error });
  }
}

export async function loadRecipientsAction(dispatch) {
  try {
    dispatch({ type: actionTypes.ACTION_LOAD_RECIPIENTS });
    const response = await axiosInstance.get('recipients/')
    const recipients = response.data
    dispatch({ type: actionTypes.ACTION_LOAD_RECIPIENTS_SUCCESS, recipients });
  } catch (error) {
    console.log(error)
    dispatch({ type: actionTypes.ACTION_LOAD_RECIPIENTS_FAIL, error });
  }
}