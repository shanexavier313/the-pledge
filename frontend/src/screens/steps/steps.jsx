import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Link,
  Typography,
  Grid,
  Container,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'
import { S3_BUCKET } from 'domains/constants'
import { ButtonLink } from '../../components/button-link'
import { Link as RouterLink } from '../../components/link'

const SwingStatesImg = `${S3_BUCKET}/images/swingstates.jpg`
const FacebookImg = `${S3_BUCKET}/images/facebook.jpg`

const StyledLink = styled(RouterLink)`
  && {
    color: #f0682f;
  }
`

const Step1 = () => (
  <Box my={1}>
    <Accordion variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant="h6">Take the Pledge</Typography>
          <Typography variant="h6" color="primary">
            Step 1
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant="body1">
              Take the pledge and track your outreach in your dashboard.
            </Typography>
          </Grid>
          <Grid item container xs={12} md={12} justify="center">
            <Box mt={1}>
              <ButtonLink variant="outlined" color="primary" to="/signup">
                Take the Pledge
              </ButtonLink>
            </Box>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  </Box>
)

const Step2 = () => (
  <Box my={1}>
    <Accordion variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant="h6">Choose who you want to call</Typography>
          <Typography variant="h6" color="primary">
            Step 2
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Typography variant="subtitle1">Here’s who to call:</Typography>
          <Typography variant="body1">
            <ol>
              <li>
                <strong>Likelies:</strong> Friends who are likely Biden
                supporters, but who may need a push to get registered or to
                actually vote.
                <ol type="a">
                  <li>Help them get registered and ready to vote for Biden.</li>
                  <li>Encourage them to take the pledge</li>
                </ol>
              </li>
              <li>
                <strong>Already energized:</strong> Friends who are already
                activated to stop Trump and are looking for a way to help.
                <ol type="a">
                  <li>Encourage them to take the pledge.</li>
                </ol>
              </li>
              <li>
                <strong>Unknowns/Non-liberals:</strong> Friends who may not be
                planning to vote for Biden
                <ol type="a">
                  <li>
                    Call them to understand where they’re coming from, to share
                    your own perspective, and to encourage them to vote blue.
                  </li>
                  <li>
                    Help them get registered and, when possible, ready to vote
                    for Biden.
                  </li>
                  <li>Encourage them to take the pledge.</li>
                </ol>
              </li>
            </ol>
          </Typography>
          <Typography variant="subtitle1">Prioritize Swing States!</Typography>
          <Typography variant="body1">
            <p>
              It is critical that we reach potential voters in swing states
              (e.g., PA, FL, WI, MI, and AZ), because this election is
              impossible to win without them.
              <strong>
                Calling friends who live, have lived, or grew up in swing states
                is our focus, even if they are not currently voting there.
              </strong>{' '}
              Larger chunks of <i>their</i> networks will be people from that
              state, making it easier for them to reach people in an authentic
              way.
            </p>
          </Typography>
          <Typography variant="subtitle1">The Swing States:</Typography>
          <Box my={1}>
            <Container>
              <img src={SwingStatesImg} alt="hello" width="60%"></img>
            </Container>
          </Box>
          <Typography variant="subtitle1">
            Finding Friends in Key States:
          </Typography>
          <Typography variant="body1">
            Facebook has a feature where you can use any search window to type
            “My friends who live in [insert name of swing state].” The results
            list three names with the option to “See all.”
          </Typography>
          <Box my={1}>
            <Container>
              <img src={FacebookImg} alt="hello" width="60%"></img>
            </Container>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  </Box>
)

const Step3 = () => (
  <Box my={1}>
    <Accordion variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant="h6">Prep for your calls</Typography>
          <Typography variant="h6" color="primary">
            Step 3
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">
          <ol type="A">
            <li>
              Use our{' '}
              <StyledLink to="/resources">
                Political Identities Resource
              </StyledLink>{' '}
              to assess where you think your callee most likely falls on the
              political spectrum and to prepare for what you may encounter in
              the conversation as a result.
            </li>
            <li>
              Use our{' '}
              <Link
                target="_blank"
                rel="noreferrer noopener"
                href="https://docs.google.com/document/d/1E1DpvhtSdoRn2Ak3EpBJnmV2-PljygTlcTp0zY43xLs/edit?usp=sharing">
                Political Views & Response Resource
              </Link>{' '}
              to prepare yourself for the nature of the conversation you will
              likely be having with this person based on their likely
              views/values. Use this resource to better empathize with their
              perspective before the call, to prepare how you plan to
              communicate, and to better contextualize their responses in real
              time.
            </li>
            <li>
              Use our{' '}
              <Link
                target="_blank"
                rel="noreferrer noopener"
                href="https://docs.google.com/document/d/1z-V_mOlN5EXXA-dpMjy5GcxPP8tWnva4iwHX1pFvkys/edit?usp=sharing">
                Conversation Guide Resource
              </Link>{' '}
              to prepare for how you want to approach the conversation from an
              interpersonal and emotional perspective. THIS RESOURCE IS PERHAPS
              MORE IMPORTANT THAN ANY OTHER!
            </li>
            <li>
              Use our{' '}
              <Link
                target="_blank"
                rel="noreferrer noopener"
                href="https://docs.google.com/document/d/1-wgo0bhW5TJzUyq1bZSl69HTCd-D-pqD-24MZ0vrQKs/edit?usp=sharing">
                Key Issues Resource
              </Link>{' '}
              to prep yourself with specific information that it may be helpful
              to have at your disposal based on the likely key
              interests/concerns of your callee.
            </li>
          </ol>
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
)

const Step4 = () => (
  <Box my={1}>
    <Accordion variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant="h6">Start making calls</Typography>
          <Typography variant="h6" color="primary">
            Step 4
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">
          Have any or all of our{' '}
          <StyledLink to="/resources">Resources</StyledLink> open when you make
          your call. And when you’re done with a call, add details in your{' '}
          <StyledLink to="/dashboard">Dashboard</StyledLink> about how it went.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
)

const Step5 = () => (
  <Box my={1}>
    <Accordion variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant="h6">Follow up</Typography>
          <Typography variant="h6" color="primary">
            Step 5
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Typography variant="subtitle1">
            <i>Most calls will likely be aided by a bit of follow up.</i>
          </Typography>
          <Typography variant="body1">
            <p>
              <b>Voting/Registration Links:</b>
            </p>
            <p>
              These sites collectively (and perhaps even individually) have all
              the information you, or your friend/callee could possibly need
              about voting on a state by state basis from important dates to
              registration services to down ballot election information
              (including links to candidates websites) to first-time-voter
              checklists, tips, and advice, these websites have it all. Send
              your friend these links to help them get/stay organized after your
              call!
            </p>
            <ul>
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.vote411.org/ballot">
                  Vote411
                </Link>
                : Everything. Important dates, down ballot race information and
                links to candidate websites, registration links and check sites,
                polling place information, etc. Headcount: Also everything.
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.voteamerica.com/">
                  VoteAmerica
                </Link>
                : Easy registration, find out where to vote, track your ballot,
                check your registration status, register to vote, vote by mail
                information, request your absentee ballot, receive election
                reminders, contact your election office, etc.
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.nytimes.com/interactive/2020/09/24/us/politics/how-to-vote-register.html">
                  NYTimes Interactive How-to-vote/register
                </Link>{' '}
                Key dates, registration info, detailed/helpful voting
                information. Requires NYT login.
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.usa.gov/voter-registration">
                  usa.gov/voter-registration
                </Link>{' '}
                Voter registration checks and info.{' '}
              </li>
            </ul>
            <p>
              <b>Take the Pledge Link:</b>
            </p>
            <p>
              If your friend agreed to take the pledge, send them a link{' '}
              <Link
                target="_blank"
                rel="noreferrer noopener"
                href="sharethepledge.com">
                {' '}
                The Pledge
              </Link>{' '}
              and encourage them to get signed up.
            </p>
            <p>
              <i>
                Once you’ve indicated that you’ve completed a call, these links
                and sample texts for this sort of outreach will be in your
                dashboard.
              </i>
            </p>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  </Box>
)

const Step6 = () => (
  <Box my={1}>
    <Accordion variant="outlined" square={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant="h6">Keep in touch</Typography>
          <Typography variant="h6" color="primary">
            Step 6
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">
          <p>
            Hold your friends accountable. Remind them about upcoming voting
            deadlines and to make their calls. Studies like “Voting to Tell
            Others,” have found that “voter turnout would increase by 2 percent
            if the number of times people were asked if they voted doubled,” due
            exclusively to the phenomenon of people not wanting to have to lie
            in the future when (they anticipate) they will be asked again.
            Simple check-ins can go a long way! Once you’ve indicated that
            you’ve completed a call, there will be sample texts for this sort of
            outreach in your dashboard.
          </p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
)

export const StepCards = () => (
  <>
    <Step1 />
    <Step2 />
    <Step3 />
    <Step4 />
    <Step5 />
    <Step6 />
  </>
)
