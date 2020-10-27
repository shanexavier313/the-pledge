import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  Box as MuiBox,
  Grid,
  IconButton,
  List,
  ListItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
// import { Link as Link } from '@reach/router'
import { Link } from 'components/link'
import { ButtonLink } from 'components/button-link'
import { logoutAction } from 'redux/actions/authActions'
import { useSnackbar } from 'notistack'
import { S3_BUCKET } from 'domains/constants'
const logo = `${S3_BUCKET}/images/logo.svg`

const MobileMenuList = styled(List)`
  && {
    & > a,
    & > div {
      justify-content: center;
    }
    font-size: 1rem;
  }
`
export const MobileNav = () => {
  const dispatch = useDispatch()
  const [isOpen, toggleIsOpen] = useState(false)
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { enqueueSnackbar } = useSnackbar()
  const logOut = () => logoutAction(enqueueSnackbar, dispatch)

  return (
    <>
      <Grid container color="black" bg="#E9EDF1" alignItems="center">
        <Grid item xs={3}>
          {!isOpen && (
            <IconButton onClick={() => toggleIsOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={6}>
          <MuiBox display="flex" mx="auto" justifyContent="center">
            <img src={logo} height="40rem" alt="logo" />
          </MuiBox>
        </Grid>
        <Grid item xs={3} justiy="end" container direction="row-reverse">
          {isOpen && (
            <IconButton onClick={() => toggleIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
      {isOpen && (
        <MobileMenuList component="nav" aria-label="main mailbox folders">
          <ListItem component={Link} to="/" className="nav-link">
            Home
          </ListItem>
          <ListItem component={Link} to="/resources" className="nav-link">
            Resources
          </ListItem>
          <ListItem component={Link} to="/the-why" className="nav-link">
            The Why
          </ListItem>
          <ListItem
            component={Link}
            to="/sharing-the-pledge"
            className="nav-link">
            Sharing the Pledge
          </ListItem>
          <Grid container>
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
              <ButtonLink
                to="/"
                onClick={logOut}
                color="primary"
                variant="contained">
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
        </MobileMenuList>
      )}
    </>
  )
}
