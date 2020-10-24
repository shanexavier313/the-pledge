import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
  Link,
  Typography,
  Container,
  Hidden,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
  loadCallsAction,
  loadRecipientsAction,
  updateCallAction,
} from 'redux/actions/dashboardActions'
import TabButton from 'components/tab-button'
import CallsList from 'components/calls-list'
import RecipientsList from 'components/recipients-list'
import { LayoutWrapper } from 'app/wrappers/layout'

const DashboardWrapper = styled(Grid)`
  && {
    max-width: 616px;
  }
`

export const Dashboard = () => {
  const [tab, setTab] = useState('calls')
  const dispatch = useDispatch()
  const { calls, recipients, loading } = useSelector((state) => state.dashboard)
  useEffect(() => {
    if (tab === 'calls') {
      loadCallsAction(dispatch)
      loadRecipientsAction(dispatch)
    } else {
      loadRecipientsAction(dispatch)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const updateCallActionCallback = (call, updatedData) => {
    updateCallAction(dispatch, call, updatedData, calls)
    // loadCallsAction(dispatch)
    // navigate('dashboard')
  }
  return (
    <LayoutWrapper>
      <Box
        minHeight={'40vh'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        bgcolor="base.300"
        px={'10vh'}
        my={2}>
        <Box mb={1}>
          <Typography variant="h4">
            <b>Dashboard</b>
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h6">
            Don’t worry if you can’t think of a lot of people to call at first.
            You can come back to this Dashboard at any time to add people to
            call, and schedule calls.
          </Typography>
        </Box>
      </Box>
      <Container>
        <Accordion variant="outlined" square={true}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box
              width={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between">
              <Typography variant="h6">
                <b>What to do after a call</b>
              </Typography>
              <Hidden smDown>
                <Typography variant="body1" color="primary">
                  LEARN MORE
                </Typography>
              </Hidden>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography variant="subtitle1">
                After you have called send a follow-up text or email along these
                lines:
              </Typography>
              <Typography variant="body">
                <p>
                  <b>Just after the call:</b>
                </p>
              </Typography>
              <Typography variant="body1">
                <i>
                  <ul>
                    <li>
                      Hey! I’m glad you decided to take the pledge. Here’s a
                      link to get signed up!{' '}
                      <Link href="sharethepledge.com">sharethepledge.com</Link>
                    </li>
                    <li>
                      Hey! I just wanted to reach out about our call earlier,
                      and send a link for you to get registered and find your
                      polling place. These links are easy for getting all the
                      information you need about voting in your state, including
                      important dates, down ballot race information, polling
                      places, and stuff like that. Check any of them out. They
                      should have what you need but let me know if you have any
                      questions!{' '}
                      <Link href="https://www.vote411.org/ballot">Vote411</Link>
                      ,{' '}
                      <Link href="https://www.headcount.org/verify-voter-registration/?source=HChomepage">
                        Headcount
                      </Link>
                      ,{' '}
                      <Link href="https://www.voteamerica.com/">
                        VoteAmerica
                      </Link>
                    </li>
                    <li>
                      Hey! Re: our call, I just wanted to check and see if
                      you’ve confirmed that you’re registered to vote? Use this
                      link to check:{' '}
                      <Link href="https://www.usa.gov/voter-registration">
                        usa.gov/voter-registration
                      </Link>
                    </li>
                  </ul>
                </i>
              </Typography>
              <Typography variant="body">
                <p>
                  <b>Staying in touch:</b>
                </p>
              </Typography>
              <Typography variant="body1">
                <i>
                  <ul>
                    <li>
                      Hey! Just wanted to reach out about our call a few days
                      ago and make sure you’re still planning to vote! Check-ins
                      are good for guaranteeing turn-out! Do you have a day
                      you're planning to vote? Let me know! Use these sites to
                      find info about polling places and whatever else you might
                      need.{' '}
                      <Link href="https://www.vote411.org/ballot">Vote411</Link>
                      ,{' '}
                      <Link href="https://www.headcount.org/verify-voter-registration/?source=HChomepage">
                        Headcount
                      </Link>
                      ,{' '}
                      <Link href="https://www.voteamerica.com/">
                        VoteAmerica
                      </Link>{' '}
                      Let me know if there’s any way I can help.
                    </li>
                    <li>
                      Hey! Just wanted to reach out and see how The Pledge is
                      going for you. Have you signed up yet? Here’s the link if
                      you haven’t signed up yet:{' '}
                      <Link href="sharethepledge.com">sharethepledge.com</Link>!
                    </li>
                    <li>
                      Hey! You mentioned when we last talked that you were
                      planning to vote yesterday. Did you end up getting out to
                      vote?
                    </li>
                    <li>
                      Hey how have your calls been going so far? Let me know if
                      you want to talk any of them through.
                    </li>
                  </ul>
                </i>
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Box textAlign="center" mt={1}>
        <Typography variant="subtitle1">
          <i>
            Remember to add notes about your calls to organize your personalized
            follow up approach!
          </i>
        </Typography>
      </Box>
      <Grid container alignItems="center" justify="center" fullWidth>
        <Box p={1}>
          <TabButton
            active={tab === 'calls'}
            label="Calls"
            onClick={() => setTab('calls')}
          />
        </Box>
        <Box p={1}>
          <TabButton
            active={tab === 'recipients'}
            label="Recipients"
            onClick={() => setTab('recipients')}
          />
        </Box>
      </Grid>
      <Grid container alignItems="center" justify="center" fullWidth>
        <Box px={2} py={2}>
          {tab === 'calls' && (
            <DashboardWrapper container spacing={4}>
              <CallsList
                calls={calls}
                recipients={recipients}
                updateCallAction={updateCallActionCallback}
                loading={loading}
              />
            </DashboardWrapper>
          )}
          {tab === 'recipients' && (
            <DashboardWrapper container spacing={4}>
              <RecipientsList recipients={recipients} />
            </DashboardWrapper>
          )}
        </Box>
      </Grid>
    </LayoutWrapper>
  )
}
