import React from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { updateAccountAction } from 'redux/actions/authActions'
import { Ui } from './ui'

export const UpdateAccount = ({ toggleModal = null }) => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await updateAccountAction(dispatch, data)
      if (isError) {
        const responseData = response.response
        if (responseData.status === 400) {
          return { error: responseData.data }
        }
      }
      else {
        enqueueSnackbar('Account is updated', { variant: 'success' })
        toggleModal(false);
      }
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }

  return <Ui onSubmit={onSubmit} toggleModal={toggleModal} />
}
