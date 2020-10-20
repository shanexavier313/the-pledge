import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCall } from 'redux/actions/dashboardActions'
import { useSnackbar } from 'notistack'
import moment from 'moment';
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
      console.log('12333', moment(data.date, 'MM-DD-YYYY'))
      if(!moment(data.date, 'MM-DD-YYYY').isValid()) {
        setErrorState({ invalidInput: true, errors: {date: 'Date must be MM-DD-YYYY'} })
        return;
      }
      const { response, isError } = await createCall(dispatch, data)
      if (isError) {
        const responseData = response.response
        if (responseData.status === 400) {
          enqueueSnackbar(responseData.data, { variant: 'warning' })
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
