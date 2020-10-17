import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack';
import { createRecipient } from 'redux/actions/dashboardActions'
import { navigate } from '@reach/router'
import { Ui } from './ui'
import { getUser } from 'domains/identity/user'

export const CreateRecipient = () => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();
  const [errorState, setErrorState] = useState({
    invalidInput: false,
    errors: {},
  })
  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await createRecipient(dispatch, data)
      if (isError) {
        const responseData = response.response
        enqueueSnackbar(responseData.data, {  variant: 'warning' });
        if (responseData.status === 400) {
          setErrorState({ invalidInput: true, errors: responseData.data })
        }
      }
      else {
        enqueueSnackbar('New Recipient is Created!', { variant: 'success' });
        navigate('dashboard')
      }
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }

  return <Ui onSubmit={onSubmit} errorState={errorState} />
}