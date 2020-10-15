import React from 'react'
import { Alert as TuiAlert, Text } from 'theme-ui'

export const Alert = ({ children, isError }) => (
  <TuiAlert mt={3} variant={isError ? 'status' : 'error'}>
    <Text variant="text.body.small" color="white">
      {children}
    </Text>
  </TuiAlert>
)
