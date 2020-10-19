import React, { useState } from 'react'
import { bool, object } from 'prop-types'
import { Link } from '@material-ui/core'
import { Box } from 'rebass'
import { Flex, Heading, Text } from 'theme-ui'

export const ContentBanner = ({ content, reverse }) => {
  const [showMore, toggleShowMore] = useState(false)
  return (
    <Flex
      bg="white"
      variant="content.normal"
      py={4}
      sx={reverse ? { flexDirection: 'row-reverse' } : {}}>
      <Box width={[1, 1, 3 / 4]}>
        <Heading mb={3} variant="text.h3">
          {content.heading}
        </Heading>
        <Text variant="body.large" my={3}>
          {content.body}
        </Text>
        <Link variant="links.ctaLink" onClick={() => toggleShowMore(!showMore)}>
          Learn More >
        </Link>
      </Box>
      <Box
        width={[1, 1, 1 / 4]}
        mr={reverse ? 4 : 0}
        py={6}
        bg="primary"
        sx={{ opacity: '40%' }}></Box>
    </Flex>
  )
}

ContentBanner.defaultProps = {
  content: null,
  reverse: false,
}

ContentBanner.propTypes = {
  content: object.isRequired,
  reverse: bool.isRequired,
}
