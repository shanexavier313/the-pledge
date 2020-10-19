import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { navigate } from '@reach/router'
import CallItem from '../call-item'

const RecipientsList = ({ recipients }) => {
  return (
    <>
      {recipients.map((recipient, index) => {
        return <CallItem recipient={recipient} key={index} />
      })}
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('create-recipient')}
          fullWidth>
          Add Recipient +
        </Button>
      </Grid>
    </>
  )
}
export default RecipientsList
