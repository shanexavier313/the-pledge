import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { StepCards } from './steps'
import { LayoutWrapper } from 'app/wrappers/layout'

export const Steps = () => (
  <LayoutWrapper>
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      fullWidth>
      <Typography variant="h4">Step by Step</Typography>
      <StepCards />
    </Grid>
  </LayoutWrapper>
)
