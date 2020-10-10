import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import styled from 'styled-components'
import { Divider } from '../../../../components/divider'
import { Link } from '../../../../components/link'

const FooterLinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const DesktopFooter = () => (
  <Flex color="white" justifyContent="space-around" alignItems="center" py={1}>
    <Box width={[1, 1, 1 / 2]}>
      <Heading>The Pledge</Heading>
      <Text>
        We need to get as many American citizens registered and planning to vote
        for Biden as possible! Trump has verbally stated that he will contest
        this election, and that he does not intend to pass power peacefully.
      </Text>
    </Box>
    <Divider />
    <Flex width={[1, 1, 1 / 2]}>
      <Box width={[1, 1, 1 / 2]}>
        <FooterLinkList color="white">
          <li>
            <Link variant="nav" to="/">
              Demographic Breakdown
            </Link>
          </li>
          <li>
            <Link variant="nav" to="/">
              Commonly Held Views
            </Link>
          </li>
          <li>
            <Link variant="nav" to="/">
              Key Issues
            </Link>
          </li>
          <li>
            <Link variant="nav" to="/">
              Swing State Information
            </Link>
          </li>
        </FooterLinkList>
      </Box>
      <Box width={[1, 1, 1 / 2]}>
        <FooterLinkList>
          <li>
            <Link variant="nav" to="/">
              About the Pledge
            </Link>
          </li>
          <li>
            <Link variant="nav" to="/">
              Contact Us
            </Link>
          </li>
        </FooterLinkList>
      </Box>
    </Flex>
  </Flex>
)
