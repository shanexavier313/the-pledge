import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Button, Dialog, Typography, Grid } from '@material-ui/core'
import { UpdateAccount } from '../update-account'

const AccountDialog = styled(Dialog)`
  && {
    & > div {
      padding: 0;
      form {
        padding: 0;
        padding-top: 3rem;
        padding-bottom: 3rem;
        margin: 0;
        border: none;
      }
    }
  }
`

const StyledButton = styled(Button)`
  && {
    margin: 16px;
  }
`

export const Ui = ({ user }) => {
  const [modal, toggleModal] = useState(false)

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Box color="primary.main">
        <Typography variant="h6">Profile</Typography>
      </Box>
      <Box
        mt={3}
        mb={6}
        mx={1}
        py={3}
        px={3}
        border={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        borderColor="primary.main">
        <Typography variant="h6">
          <p>
            {user?.first_name} {user?.last_name}
            <br />
            {user?.email}
          </p>
        </Typography>
        <Box
          borderRadius="5px"
          width="50%"
          bgcolor="secondary.main"
          color="text.white">
          <Typography variant="h6">
            <strong>{user?.signup_code}</strong>
          </Typography>
        </Box>
        <StyledButton
          my={4}
          variant="outlined"
          color="secondary"
          onClick={() => toggleModal(true)}>
          Edit Account
        </StyledButton>
        <AccountDialog
          onClose={() => toggleModal(false)}
          aria-labelledby="simple-dialog-title"
          open={modal}>
          <UpdateAccount toggleModal={toggleModal} />
        </AccountDialog>
      </Box>
    </Grid>
  )
}
