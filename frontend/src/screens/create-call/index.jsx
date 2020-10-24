import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCall } from 'redux/actions/dashboardActions'
import { useSnackbar } from 'notistack'
import moment from 'moment'
import { navigate } from '@reach/router'
import { Ui } from './ui'
import { LayoutWrapper } from 'app/wrappers/layout'

export const CreateCall = () => {
  const dispatch = useDispatch()
  const { recipients } = useSelector((state) => state.dashboard)
  const { enqueueSnackbar } = useSnackbar()
  const onSubmit = async (data, e) => {
    try {
      data.date = moment(data.date, 'YYYY-MM-DD').format('MM-DD-YYYY')
      const { response, isError } = await createCall(dispatch, data)
      if (isError) {
        const responseData = response.response
        if (responseData.status === 400) {
          enqueueSnackbar(responseData.data, { variant: 'warning' })
          return { error: responseData.data }
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
    <LayoutWrapper>
      <Ui onSubmit={onSubmit} recipients={recipientsList} />
    </LayoutWrapper>
  )
}
