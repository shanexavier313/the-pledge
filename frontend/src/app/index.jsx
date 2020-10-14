import React from 'react'
import { Router } from './router'
import { IdentityWrapper } from './wrappers/identity'
import { LayoutWrapper } from './wrappers/layout'
import { StylesWrapper } from './wrappers/styles'

export const App = ({ children }) => (
  <StylesWrapper>
    <IdentityWrapper>
      <LayoutWrapper>
        <Router></Router>
      </LayoutWrapper>
    </IdentityWrapper>
  </StylesWrapper>
)
