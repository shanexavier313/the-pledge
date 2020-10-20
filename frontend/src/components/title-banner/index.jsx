import React from 'react'
import { Flex, Heading, Text } from 'rebass'

export const TitleBanner = ({ title, description, bg }) => {
  return (
    <Flex
      mx="auto"
      variant="content.normal"
      bg={bg}
      sx={{
        width: '100%',
        height: '40vh',
      }}>
      <Flex
        px={2}
        pb={4}
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Heading variant="text.h2" mb={4}>
          {title}
        </Heading>
        <Text variant="text.body.large" sx={{ textAlign: 'center' }}>
          {description}
        </Text>
      </Flex>
    </Flex>
  )
}
