/** @jsx jsx */
// eslint-disable-next-line
import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import { jsx } from 'theme-ui'
import { Divider } from 'components/divider'
import { Link } from 'components/link'

export const DesktopFooter = () => (
  <Flex color="white" justifyContent="space-around" alignItems="center" py={3}>
    <Box width={[1, 1, 1 / 2]}>
      <Heading variant="text.h5" sx={{ fontWeight: 600, my: 2 }}>
        The Pledge
      </Heading>
      <Text variant="text.body.small">
        We need to get as many American citizens registered and planning to vote
        for Biden as possible! Trump has verbally stated that he will contest
        this election, and that he does not intend to pass power peacefully.
      </Text>
    </Box>
    <Divider />
    <Flex width={[1, 1, 1 / 2]}>
      <Box width={[1, 1, 1 / 2]}>
        <ul
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0,
          }}
        >
          <li sx={{ my: 3 }}>
            <Link variant="links.footer" to="/">
              Demographic Breakdown
            </Link>
          </li>
          <li sx={{ my: 3 }}>
            <Link variant="links.footer" to="/">
              Commonly Held Views
            </Link>
          </li>
          <li sx={{ my: 3 }}>
            <Link variant="links.footer" to="/">
              Key Issues
            </Link>
          </li>
          <li sx={{ my: 3 }}>
            <Link variant="links.footer" to="/">
              Swing State Information
            </Link>
          </li>
        </ul>
      </Box>
      <Box width={[1, 1, 1 / 2]}>
        <ul
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0,
          }}
        >
          <li sx={{ my: 3 }}>
            <Link variant="links.footer" to="/">
              About the Pledge
            </Link>
          </li>
          <li sx={{ my: 3 }}>
            <Link variant="links.footer" to="/">
              Contact Us
            </Link>
          </li>
        </ul>
      </Box>
    </Flex>
  </Flex>
)
