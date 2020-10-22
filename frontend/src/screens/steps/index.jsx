import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { StepCards } from './steps'

export const Steps = () => (
  <Grid container direction="column" alignItems="center" justify="center" fullWidth>
    <Typography variant="h5">Step by Step</Typography>
    <StepCards />
  </Grid>
)
