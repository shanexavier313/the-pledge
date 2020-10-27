import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box as MuiBox, Grid } from '@material-ui/core'
import { Link as RouterLink } from '@reach/router'
import { Link } from 'components/link'
import { ButtonLink } from 'components/button-link'
import { logoutAction } from 'redux/actions/authActions'
import { useSnackbar } from 'notistack'
import { S3_BUCKET } from 'domains/constants'
const logo = `${S3_BUCKET}/images/logo.svg`

export const DesktopNav = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { enqueueSnackbar } = useSnackbar()
  const logOut = () => logoutAction(enqueueSnackbar, dispatch)

  return (
    <Grid container color="black" bg="white" alignItems="center">
      <MuiBox display="flex" justifyContent="center">
        <RouterLink to="/">
          <img src={logo} height="40rem" alt="logo" />
        </RouterLink>
      </MuiBox>
      <Link to="/" my={2} mx={1} className="nav-link">
        Home
      </Link>
      <Link to="/resources" my={2} mx={1} className="nav-link">
        Resources
      </Link>
      <Link to="/the-why" my={2} mx={1} className="nav-link">
        The Why
      </Link>
      <Link
        to="/sharing-the-pledge"
        my={2}
        mx={1}
        className="nav-link"
        sx={{ color: 'secondary' }}>
        Sharing the Pledge
      </Link>
      <MuiBox mx="auto" />
      {!isLoggedIn && (
        <ButtonLink to="/login" color="primary" variant="contained">
          Login
        </ButtonLink>
      )}
      {!isLoggedIn && (
        <ButtonLink to="/signup" color="primary" variant="outlined">
          Take the Pledge
        </ButtonLink>
      )}
      {isLoggedIn && (
        <ButtonLink to="/" onClick={logOut} color="primary" variant="contained">
          Logout
        </ButtonLink>
      )}
      {isLoggedIn && (
        <ButtonLink to="/dashboard" color="primary" variant="outlined">
          Dashboard
        </ButtonLink>
      )}
      {isLoggedIn && (
        <ButtonLink to="/account" color="primary" variant="outlined">
          Account
        </ButtonLink>
      )}
    </Grid>
  )
}
