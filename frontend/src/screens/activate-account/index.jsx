import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { Box } from '@material-ui/core'
import { LayoutWrapper } from 'app/wrappers/layout'
import { activateAction } from 'redux/actions/authActions'
export const ActivateAccount = (props) => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  useEffect(() => {
    if (props.uid && props.token) {
      activateAction(props, dispatch, enqueueSnackbar)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <LayoutWrapper>
      <Box fontSize="h4.fontSize" textAlign="center" my={3}>
        Activating Account
      </Box>
    </LayoutWrapper>
  )
}
