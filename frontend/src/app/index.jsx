import React from 'react'
import { Router } from './router'
import { LayoutWrapper } from './wrappers/layout'
import { StylesWrapper } from './wrappers/styles'

export const App = ({ children }) => (
  <StylesWrapper>
    <LayoutWrapper>
      <Router></Router>
    </LayoutWrapper>
  </StylesWrapper>
)
