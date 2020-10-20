import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { signUpAction } from 'redux/actions/authActions'
import { Ui } from './ui'

export const SignUp = () => {
  const [errorState, setErrorState] = useState({
    errors: {},
  })
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()

  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await signUpAction(
        enqueueSnackbar,
        dispatch,
        data,
      )
      if (isError) {
        const responseData = response.response
        if (responseData.status === 400) {
          setErrorState({ errors: responseData.data })
        }
      }
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }

  return <Ui onSubmit={onSubmit} errorState={errorState} />
}
