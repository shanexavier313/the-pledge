import React from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { resetPasswordAction } from 'redux/actions/authActions'
import { LayoutWrapper } from 'app/wrappers/layout'
import { Ui } from './ui'

export const RequestResetPassword = () => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = async (data) => {
    try {
      const { response, isError } = await resetPasswordAction(
        data,
        dispatch,
        enqueueSnackbar,
      )
      if (isError) {
        const responseData = response.response
        if (responseData.status === 400) {
          return { error: { email: responseData.data } }
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <LayoutWrapper>
      <Ui onSubmit={onSubmit} />
    </LayoutWrapper>
  )
}
