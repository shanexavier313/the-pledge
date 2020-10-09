import React from 'react'
import { Router } from './router'
import { DesktopNav } from './wrappers/layout/desktop-nav'
import { StylesWrapper } from './wrappers/styles'

export const App = ({ children }) => (
  <StylesWrapper>
    <DesktopNav />
    <Router></Router>
  </StylesWrapper>
)
