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

export async function createRecipient(dispatch, data) {
  try {
    data.user = getUser().id;
    const response = await axiosInstance.post('recipients/', data)
    return { response: response.data, isError: false }
  } catch (error) {
    return { response: error, isError: true }
  }
}

export async function createCall(dispatch, data) {
  try {
    data.caller = getUser().id;
    const response = await axiosInstance.post('calls/', data)
    return { response: response.data, isError: false }
  } catch (error) {
    return { response: error, isError: true }
  }
}

export async function updateCallNotesAction(data, notes) {
  try {
    data.notes = notes;
    const response = await axiosInstance.put(`calls/${data.id}/`, data)
    return { response: response.data, isError: false }
  } catch (error) {
    return { response: error, isError: true }
  }
}