import React from 'react'
import { Flex } from 'theme-ui'
import { StepAccordion } from 'components/step-accordion'
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
    {console.log(steps)}
    {steps.map((step) => (
      <StepAccordion key={step.stepID} step={{ step }}></StepAccordion>
    ))}
  </Flex>
)
