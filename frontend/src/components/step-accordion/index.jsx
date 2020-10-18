import React from 'react'
import { Box, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { StyledAccordion } from './styles'

export const StepAccordion = ({ step }) => (
  <Box width={0.8}>
    <StyledAccordion my={2} variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h1>{step.stepID}</h1>
        <h2>{step.primary}</h2>
      </AccordionSummary>
      <AccordionDetails>{step.description}</AccordionDetails>
    </StyledAccordion>
  </Box>
)
