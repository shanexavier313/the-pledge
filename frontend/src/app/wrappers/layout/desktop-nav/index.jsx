import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'components/link'
import { ButtonLink } from 'components/button-link'
import { logoutAction } from 'redux/actions/authActions'

export const DesktopNav = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const logOut = () => logoutAction(dispatch)

  return (
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
      {!isLoggedIn && (
        <ButtonLink to="login" my={2} ml={2} variant="buttons.primary">
          Login
        </ButtonLink>
      )}
      {!isLoggedIn && (
        <ButtonLink to="signup" my={2} ml={2} variant="buttons.secondary">
          Sign Up
        </ButtonLink>
      )}
      {isLoggedIn && (
        <ButtonLink
          to="home"
          onClick={logOut}
          my={2}
          ml={2}
          variant="buttons.primary">
          Logout
        </ButtonLink>
      )}
      {isLoggedIn && (
        <ButtonLink to="dashboard" my={2} ml={2} variant="buttons.tertiary">
          Dashboard
        </ButtonLink>
      )}
    </Flex>
  )
}
