import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Link } from '../../../../components/link'
import { ButtonLink } from '../../../../components/button-link'

export const DesktopNav = () => (
  <Flex color="black" bg="white" alignItems="center">
    <Text pr={2} fontWeight="bold">
      The Pledge
    </Text>
    <Link to="home" my={2} mx={1} variant="nav">
      Home
    </Link>
    <Link to="resources" my={2} mx={1} variant="nav">
      Resources
    </Link>
    <Link to="about" my={2} mx={1} variant="nav">
      About
    </Link>
    <Box mx="auto" />
    <Link to="login" my={2} mx={1} variant="nav">
      Log In
    </Link>
    <Link to="signup" my={2} mx={1} variant="nav">
      Sign Up
    </Link>
    <ButtonLink to="dashboard" my={2} ml={2} variant="primary">
      Dashboard
    </ButtonLink>
  </Flex>
)
