import React from 'react'
import { Link } from '@reach/router'
import { Router } from './router'
import { StylesWrapper } from './wrappers/styles'

export const App = ({ children }) => (
  <StylesWrapper>
    <Link to="login">Log In</Link>
    <Link to="signup">Sign Up</Link>
    <Router></Router>
  </StylesWrapper>
)
