import React from 'react'
import { Card, Heading, Text } from 'theme-ui'

export const StepCard = ({ stepID, primaryText }) => (
  <Card
    m={3}
    py={4}
    px={5}
    bg="white"
    sx={{ boxShadow: 'small', textAlign: 'center' }}
  >
    <Heading variant="text.h4" sx={{ opacity: '20%' }}>
      {stepID}
    </Heading>
    <Text variant="text.body.small">{primaryText}</Text>
  </Card>
)
