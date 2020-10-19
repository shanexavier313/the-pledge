import React from 'react'
import {
  Box,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { StyledAccordion } from './styles'

export const StepAccordion = ({ step }) => (
  <Box width={0.8}>
    <StyledAccordion my={2} variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h1">{step.stepID}</Typography>
        <Typography variant="body">{step.primary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body">{step.description}</Typography>
      </AccordionDetails>
    </StyledAccordion>
  </Box>
)
