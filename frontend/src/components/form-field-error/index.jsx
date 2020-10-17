import React from 'react'
import { Text } from 'theme-ui'

export const FormFieldError = ({ children }) => (
  <Text
    variant="text.body.small"
    my={1}
    color="secondary"
    sx={{ fontStyle: 'italic' }}>
    {children}
  </Text>
)
