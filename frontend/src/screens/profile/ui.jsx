import React from 'react'
import { Flex } from 'theme-ui'
import { Box, Typography } from '@material-ui/core'
import { useForm } from 'react-hook-form'

export const Ui = ({ user }) => {
  return (
    <Flex
      variant="content.normal"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <Box color="primary.main">
        <Typography variant="h6">Profile</Typography>
      </Box>
      <Box
        mt={3}
        mb={6}
        py={5}
        px={6}
        border={1}
        textAlign="center"
        borderColor="primary.main">
        <Typography variant="h6">
          <Box color="secondary.main">
            <p>
              {user.first_name} {user.last_name}
            </p>
          </Box>
          <p>{user.email}</p>
          <p>{user.signup_code}</p>
        </Typography>
      </Box>
    </Flex>
  )
}
