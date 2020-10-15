import React, { useContext } from 'react'
import { Router as ReachRouter } from '@reach/router'
import { About } from '../../screens/about'
import { Dashboard } from '../../screens/dashboard'
import { Home } from '../../screens/home'
import { Login } from '../../screens/login'
import { Resources } from '../../screens/resources'
import { SignUp } from '../../screens/sign-up'
import { IdentityContext } from '../../domains/identity'

export const Router = ({ children }) => {
  const { isLoggedIn } = useContext(IdentityContext)

  return (
    <ReachRouter>
      <About path="about" />
      <Home path="home" />
      <Resources path="resources" />
      {!isLoggedIn && <Login path="login" />}
      {!isLoggedIn && <SignUp path="/signup" />}
      {isLoggedIn && <Dashboard path="dashboard" />}
    </ReachRouter>
  )
}
