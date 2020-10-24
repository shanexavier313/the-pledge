import React from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { loginAction } from 'redux/actions/authActions'
import { LayoutWrapper } from 'app/wrappers/layout'
import { Ui } from './ui'

export const Login = () => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = async (data, e) => {
    try {
      await loginAction(enqueueSnackbar, dispatch, data)
      e.preventDefault()
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
