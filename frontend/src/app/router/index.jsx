import React from 'react'
import { Router as ReachRouter } from '@reach/router'
import { About } from '../../screens/about'
import { Dashboard } from '../../screens/dashboard'
import { Home } from '../../screens/home'
import { LogIn } from '../../screens/login'
import { Resources } from '../../screens/resources'
import { SignUp } from '../../screens/signup'

export const Router = ({ children }) => {
  return (
    <ReachRouter>
      <About path="about" />
      <Dashboard path="dashboard" />
      <Home path="home" />
      <LogIn path="login" />
      <SignUp path="signup" />
      <Resources path="resources" />
    </ReachRouter>
  )
}
