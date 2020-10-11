import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Link } from '../../../../components/link'
import { ButtonLink } from '../../../../components/button-link'

export const DesktopNav = () => (
  <Flex color="black" bg="white" alignItems="bottom">
    <Text variant="text.h4" my={2} mr={4}>
      The Pledge
    </Text>
    <Link to="home" my={2} mx={1} variant="links.nav">
      Home
    </Link>
    <Link to="resources" my={2} mx={1} variant="links.nav">
      Resources
    </Link>
    <Link to="about" my={2} mx={1} variant="links.nav">
      About
    </Link>
    <Box mx="auto" />
    <ButtonLink to="login" my={2} ml={2} variant="buttons.primary">
      Login
    </ButtonLink>
    <ButtonLink to="signup" my={2} ml={2} variant="buttons.secondary">
      Sign Up
    </ButtonLink>
    <ButtonLink to="dashboard" my={2} ml={2} variant="buttons.tertiary">
      Dashboard
    </ButtonLink>
  </Flex>
)
