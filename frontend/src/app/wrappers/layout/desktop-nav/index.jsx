import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { useSelector, useDispatch } from 'react-redux'
import { Box as MuiBox } from '@material-ui/core'
import { Link } from 'components/link'
import { ButtonLink } from 'components/button-link'
import { logoutAction } from 'redux/actions/authActions'
import { useSnackbar } from 'notistack'
import logo from 'static/images/logo.svg'

export const DesktopNav = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { enqueueSnackbar } = useSnackbar()
  const logOut = () => logoutAction(enqueueSnackbar, dispatch)

  return (
    <Flex color="black" bg="white" alignItems="center">
      <MuiBox display="flex" justifyContent="center">
        <img src={logo} height="40rem" />
      </MuiBox>
      <Link to="home" my={2} mx={1} variant="links.nav">
        Home
      </Link>
      <Link to="resources" my={2} mx={1} variant="links.nav">
        Resources
      </Link>
      <Link to="the-why" my={2} mx={1} variant="links.nav">
        The Why
      </Link>
      <Link to="about" my={2} mx={1} variant="links.nav">
        About
      </Link>
      <Link
        to="sharing-the-pledge"
        my={2}
        mx={1}
        variant="links.nav"
        sx={{ color: 'secondary' }}>
        Sharing the Pledge
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
        <ButtonLink to="home" onClick={logOut} my={2} variant="buttons.primary">
          Logout
        </ButtonLink>
      )}
      {isLoggedIn && (
        <ButtonLink to="dashboard" my={2} ml={2} variant="buttons.secondary">
          Dashboard
        </ButtonLink>
      )}
      {isLoggedIn && (
        <ButtonLink to="profile" my={2} ml={2} variant="buttons.secondary">
          Profile
        </ButtonLink>
      )}
    </Flex>
  )
}
