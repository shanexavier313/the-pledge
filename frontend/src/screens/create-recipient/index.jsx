import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { createRecipient } from 'redux/actions/dashboardActions'
import { navigate } from '@reach/router'
import { Ui } from './ui'

export const CreateRecipient = ({ toggleModal = null}) => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const [errorState, setErrorState] = useState({
    invalidInput: false,
    errors: {},
  })
  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await createRecipient(dispatch, data)
      if (isError) {
        const responseData = response.response
        enqueueSnackbar(responseData.data, { variant: 'warning' })
        if (responseData.status === 400) {
          setErrorState({ invalidInput: true, errors: responseData.data })
        }
      } else {
        if(toggleModal) {
          toggleModal(false);
        }
        else {
          navigate('dashboard')
        }
        enqueueSnackbar('New Recipient is Created!', { variant: 'success' })
      }
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }

  return <Ui onSubmit={onSubmit} errorState={errorState} toggleModal={toggleModal} />
}
