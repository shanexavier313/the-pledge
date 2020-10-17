import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCall } from 'redux/actions/dashboardActions'
import { navigate } from '@reach/router'
import { Ui } from './ui'
import { getUser } from 'domains/identity/user'

export const CreateCall = () => {
  const dispatch = useDispatch()
  const { recipients } = useSelector((state) => state.dashboard)
  const [errorState, setErrorState] = useState({
    invalidInput: false,
    errors: {},
  })
  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await createCall(dispatch, data)
      if (isError) {
        const responseData = response.response
        if (responseData.status === 400) {
          setErrorState({ invalidInput: true, errors: responseData.data })
        }
      }
      else {
        navigate('dashboard')
      }
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }
  let recipientsList = {};
  recipients.forEach((recipient, index) => {
    recipientsList[recipient.id] = `${recipient.first_name} ${recipient.last_name}`
  });
  return <Ui onSubmit={onSubmit} errorState={errorState} recipients={recipientsList}/>
}
