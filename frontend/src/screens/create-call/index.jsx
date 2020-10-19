import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCall } from 'redux/actions/dashboardActions'
import { useSnackbar } from 'notistack'
import { navigate } from '@reach/router'
import { Ui } from './ui'

export const CreateCall = () => {
  const dispatch = useDispatch()
  const { recipients } = useSelector((state) => state.dashboard)
  const { enqueueSnackbar } = useSnackbar()
  const [errorState, setErrorState] = useState({
    invalidInput: false,
    errors: {},
  })
  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await createCall(dispatch, data)
      if (isError) {
        const responseData = response.response
        enqueueSnackbar(responseData.data, { variant: 'warning' })
        if (responseData.status === 400) {
          setErrorState({ invalidInput: true, errors: responseData.data })
        }
      } else {
        enqueueSnackbar('New Call is Created!', { variant: 'success' })
        navigate('dashboard')
      }
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }
  let recipientsList = {}
  recipients.forEach((recipient, index) => {
    recipientsList[
      recipient.id
    ] = `${recipient.first_name} ${recipient.last_name}`
  })
  return (
    <Ui
      onSubmit={onSubmit}
      errorState={errorState}
      recipients={recipientsList}
    />
  )
}
