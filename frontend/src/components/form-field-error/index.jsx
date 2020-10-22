import React from 'react'
import Box from '@material-ui/core/Box'
export const FormFieldError = ({ children }) => (
  <Box fontSize="body1.fontsize" color="secondary" my={1}>
    <i>{children}</i>
  </Box>
)
