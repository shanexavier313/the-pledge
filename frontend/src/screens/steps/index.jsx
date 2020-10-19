import React from 'react'
import { Flex } from 'theme-ui'
import { Typography } from '@material-ui/core'
import { StepCard } from 'components/step-accordion'
import { steps } from 'content'

export const Steps = () => (
  <Flex
    variant="content.normal"
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
    <Typography variant="h5">Step by Step</Typography>
    {steps.map((step) => (
      <StepCard key={step.stepID} step={step}></StepCard>
    ))}
  </Flex>
)
