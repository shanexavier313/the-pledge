import React from 'react'
import { Text } from 'theme-ui'

export const FormFieldError = ({ children }) => (
  <Text variant="text.body.small" my={2} color="primary">
    {children}
  </Text>
)
