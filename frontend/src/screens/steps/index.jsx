import React from 'react'
import { Typography, Container } from '@material-ui/core'
import { StepCards } from './steps'
import { LayoutWrapper } from 'app/wrappers/layout'

export const Steps = () => (
  <LayoutWrapper>
    <Container>
      <Typography variant="h4">Step by Step</Typography>
      <StepCards />
    </Container>
  </LayoutWrapper>
)
