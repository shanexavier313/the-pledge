import React from 'react'
import { Box, Typography, Container } from '@material-ui/core'
import { StepCards } from './steps'
import { LayoutWrapper } from 'app/wrappers/layout'

export const Steps = () => (
  <LayoutWrapper>
    <Container>
      <Box textAlign="center">
        <Typography variant="h4">
          <b>Step by Step</b>
        </Typography>
      </Box>
      <StepCards />
    </Container>
  </LayoutWrapper>
)
