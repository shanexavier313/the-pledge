import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const StepCard = ({ step }) => (
  <Box width={0.8} my={1}>
    <Accordion variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant="subtitle1">{step.primary}</Typography>
          <Typography variant="h6" color="primary">
            {step.stepID}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body">{step.description}</Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
)
