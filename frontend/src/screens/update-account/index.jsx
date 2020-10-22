import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { updateAccountAction } from 'redux/actions/authActions'
import { Ui } from './ui'

export const UpdateAccount = ({ toggleModal = null }) => {
  const [errorState, setErrorState] = useState({
    invalidInput: false,
    errors: {},
  })
  const dispatch = useDispatch()

  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await updateAccountAction(dispatch, data)
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

  return (
    <Ui onSubmit={onSubmit} errorState={errorState} toggleModal={toggleModal} />
  )
}
