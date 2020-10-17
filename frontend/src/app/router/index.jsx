import React, { useEffect } from 'react'
import { Router as ReachRouter } from '@reach/router'
import { useSelector, useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack';
import { About } from 'screens/about'
import { Dashboard } from 'screens/dashboard'
import { Home } from 'screens/home'
import { Login } from 'screens/login'
import { Resources } from 'screens/resources'
import { SignUp } from 'screens/sign-up'
import { CreateRecipient } from 'screens/create-recipient'
import { CreateCall } from 'screens/create-call'
import { logoutAction } from 'redux/actions/authActions'
import { getAccessToken } from 'domains/identity'

export const Router = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch()
  // TODO:@peter this is redirecting to home from any page whenever you're not
  // logged in
  useEffect(() => {
    if (!getAccessToken() && isLoggedIn) {
      logoutAction(enqueueSnackbar, dispatch)
    }
  }, [])

  return (
    <ReachRouter>
      <About path="about" />
      <Home path="home" />
      <Resources path="resources" />
      {!isLoggedIn && <Login path="login" />}
      {!isLoggedIn && <SignUp path="signup" />}
      {isLoggedIn && <Dashboard path="dashboard" />}
      {isLoggedIn && <CreateRecipient path="create-recipient" />}
      {isLoggedIn && <CreateCall path="create-call" />}
    </ReachRouter>
  )
}
