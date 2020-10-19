import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  List,
  ListItem,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const step1 = (
  <Box width={0.8} my={1}>
    <Accordion variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant="subtitle1">Take the Pledge.</Typography>
          <Typography variant="h6" color="primary">
            Step 1
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body">
          'Sign up, take the Pledge and track your outreach in your dashboard!'
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
)

export const step2 = (
  <Box width={0.8} my={1}>
    <Accordion variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant="subtitle1">
            Choose who you want to call.
          </Typography>
          <Typography variant="h6" color="primary">
            Step 1
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body">
          Think about friends or connections you know that you think might not
          be voting or voting for conservative candidates. People in swing
          states are a higher priority, but it's best to start with people who
          most comfortable having potentially tough, political conversations
          with, and then work your way out.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
)

export const step3 = (
  <Box width={0.8} my={1}>
    <Accordion variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant="subtitle1">Prep for your calls.</Typography>
          <Typography variant="h6" color="primary">
            Step 3
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body">
          <ul>
            <li>
              A: Use our Demographic Breakdown Resource [hyper link] to assess
              where you think your callee most likely falls on the political
              spectrum and to prepare for what you may encounter in the
              conversation as a result.
            </li>
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
)
