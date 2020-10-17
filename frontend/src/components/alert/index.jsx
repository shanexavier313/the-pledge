import React from 'react'
import { Alert as TuiAlert, Flex, Text } from 'theme-ui'

export const Alert = ({ children, isError }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <TuiAlert mt={2} px={3} variant={isError ? 'status' : 'error'}>
      <Text variant="text.body.small" color="white">
        {children}
      </Text>
    </TuiAlert>
  </Flex>
)
