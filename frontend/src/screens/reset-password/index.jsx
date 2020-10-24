import React from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { LayoutWrapper } from 'app/wrappers/layout'
import { resetPasswordConfirmAction } from 'redux/actions/authActions'
import { Ui } from './ui'

export const ResetPassword = (props) => {
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    try {
      const { response, isError } = await resetPasswordConfirmAction(
        { ...data, ...props },
        dispatch,
        enqueueSnackbar,
      )
      if (isError) {
        const responseData = response.response
        if (responseData.status === 400) {
          return { error: responseData.data }
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
