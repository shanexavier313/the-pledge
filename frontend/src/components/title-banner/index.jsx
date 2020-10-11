import React from 'react'
import { Flex, Heading, Text } from 'rebass'

export const TitleBanner = ({ title, description, bg }) => {
  return (
    <Flex
      mx="auto"
      py={2}
      px={2}
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30vh',
      }}
    >
      <Heading variant="text.h2">{title}</Heading>
      <Text variant="text.body.large" sx={{ textAlign: 'center' }}>
        {description}
      </Text>
    </Flex>
  )
}
