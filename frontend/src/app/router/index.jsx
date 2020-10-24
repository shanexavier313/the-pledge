import React, { useEffect } from 'react'
import { Router as ReachRouter } from '@reach/router'
import { useSelector, useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { Account } from 'screens/account'
import { ActivateAccount } from 'screens/activate-account'
import { CreateCall } from 'screens/create-call'
import { CreateRecipient } from 'screens/create-recipient'
import { Dashboard } from 'screens/dashboard'
import { Home } from 'screens/home'
import { Login } from 'screens/login'
import { Resources } from 'screens/resources'
import { RequestResetPassword } from 'screens/request-reset-password'
import { ResetPassword } from 'screens/reset-password'
import { SharingThePledge } from 'screens/sharing-the-pledge'
import { SignUp } from 'screens/sign-up'
import { Steps } from 'screens/steps'
import { TheWhy } from 'screens/the-why'

import { logoutAction } from 'redux/actions/authActions'
import { getAccessToken } from 'domains/identity'

export const Router = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  // TODO:@peter this is redirecting to home from any page whenever you're not
  // logged in
  useEffect(() => {
    if (!getAccessToken() && isLoggedIn) {
      logoutAction(enqueueSnackbar, dispatch)
    }
  })

  return (
    <ReachRouter>
      <Home path="/" />
      <Account path="account" />
      <ActivateAccount path="activate/:uid/:token" />
      <Resources path="resources" />
      <RequestResetPassword path="reset-password" />
      <ResetPassword path="reset-password/confirm/:uid/:token" />
      <SharingThePledge path="sharing-the-pledge" />
      <Steps path="steps" />
      <TheWhy path="the-why" />
      {!isLoggedIn && <Login path="login" />}
      {!isLoggedIn && <SignUp path="signup" />}
      {isLoggedIn && <Dashboard path="dashboard" />}
      {isLoggedIn && <CreateRecipient path="create-recipient" />}
      {isLoggedIn && <CreateCall path="create-call" />}
    </ReachRouter>
  )
}
