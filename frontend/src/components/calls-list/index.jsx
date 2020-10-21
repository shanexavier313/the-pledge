import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { navigate } from '@reach/router'
import CallItem from '../call-item'
const CallsList = ({ calls, recipients, updateCallAction, loading }) => {
  return (
    <>
      {calls?.map((call, index) => {
        const recipient = recipients.find((item) => item.id === call.recipient)
        return (
          <CallItem
            call={call}
            recipient={recipient}
            key={index}
            updateCallAction={updateCallAction}
            loading={loading}
          />
        )
      })}
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('create-call')}
          fullWidth>
          Add Call +
        </Button>
      </Grid>
    </>
  )
}
export default CallsList
