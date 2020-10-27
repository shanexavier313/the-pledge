import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Alert from '@material-ui/lab/Alert'
import Container from '@material-ui/core/Container'
import { useSnackbar } from 'notistack'
import { loginAction } from 'redux/actions/authActions'
import { LayoutWrapper } from 'app/wrappers/layout'
import { Ui } from './ui'

export const Login = () => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const { message } = useSelector((state) => state.alert)
  const onSubmit = async (data) => {
    try {
      await loginAction(enqueueSnackbar, dispatch, data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <LayoutWrapper>
      {message && (
        <Container maxWidth="sm">
          <Alert variant="filled" severity="info">
            {message}
          </Alert>
        </Container>
      )}
      <Ui onSubmit={onSubmit} />
    </LayoutWrapper>
  )
}
