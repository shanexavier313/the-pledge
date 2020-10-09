import React from 'react'
import { Router as ReachRouter } from '@reach/router'
import { LogIn } from '../../screens/login'
import { SignUp } from '../../screens/signup'

export const Router = ({ children }) => {
  return (
    <ReachRouter>
      <LogIn path="login" />
      <SignUp path="signup" />
    </ReachRouter>
  )
}
