import React from 'react'
import { Card, Heading, Text } from 'theme-ui'

export const StepBannerCard = ({ stepID, primaryText }) => (
  <Card
    m={3}
    px={2}
    pt={4}
    pb="auto"
    bg="white"
    sx={{
      boxShadow: 'small',
      textAlign: 'center',
      width: '240px',
      height: '144px',
    }}>
    <Heading variant="text.h4" mb={2} sx={{ opacity: '20%' }}>
      {stepID}
    </Heading>
    <Text variant="text.body.small" sx={{ fontWeight: 'bold' }}>
      {primaryText}
    </Text>
  </Card>
)
