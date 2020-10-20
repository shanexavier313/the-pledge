import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box as MuiBox,
  Card as MuiCard,
  CardMedia,
  Link,
  Grid,
  Button,
} from '@material-ui/core'
import { Box } from 'rebass'
// import { Card, Flex, Heading, Image, Text } from 'theme-ui'
import VoteImg1 from 'static/images/arnaud-jaegers-ibwjsmobnnu-unsplash.jpg'
import VoteImg2 from 'static/images/element5-digital-2i7Dn2uMEQE-unsplash.jpg'
import SwingStatesImg from 'static/images/swingstates.jpg'

const SectionSummary = styled(AccordionSummary)`
  && {
    box-shadow: none;
    padding: 0;
  }
`

const SectionDetails = styled(AccordionDetails)`
  && {
    box-shadow: none;
    padding: 0;
  }
`

const SectionAccordian = styled(Accordion)`
  && {
    box-shadow: none;
  }
`
const WhoToCallBanner = () => {
  const [expand, toggleExpand] = useState(false)
  return (
    <MuiBox px={20} py={2}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={8}>
          <SectionAccordian expanded={expand}>
            <SectionSummary>
              <MuiBox>
                <Typography mb={3} variant="h4">
                  Who To Call
                </Typography>
                <Typography variant="body1" my={3}>
                  <p>
                    We need to get as many American citizens registered and
                    planning to vote for Biden as possible! Trump has verbally
                    stated that he will contest this election, and that he does
                    not intend to pass powerpeacefully. He's stacking the
                    Supreme Court now! We need swing states,but more
                    importantly, we need a landslide if this election is to
                    bedecided by the people and not by Trump's new, highly
                    conservative supreme court.
                  </p>
                  <p>
                    On September 24th, Eric Trump told supporters at a Las Vegas
                    campaign stop that his father “of course [would] concede”
                    the election “if he got blown out of the water” by Joe
                    Biden.
                  </p>
                  <p>
                    <strong>So, we need to blow him out.</strong> Every vote
                    counts
                  </p>
                </Typography>
              </MuiBox>
            </SectionSummary>
            <SectionDetails>
              <div>
                <Typography variant="h6">Here’s who to call:</Typography>
                <Typography variant="body">
                  <ol>
                    <li>
                      Friends who are likely Biden supporters but who may need
                      a push to get registered or to actually get out to vote.
                      <ol type="a">
                        <li>
                          Get them registered and planning to vote for Biden.
                        </li>
                        <li>Get them to take the pledge</li>
                      </ol>
                    </li>
                    <li>
                      Friends who are already activated to Stop Trump and are
                      looking for a way to help!
                      <ol type="a">
                        <li>Get them to take the pledge.</li>
                      </ol>
                    </li>
                    <li>
                      Friends who may not be planning to vote for Biden
                      <ol type="a">
                        <li>
                          Get them registered and planning to vote for Biden.
                        </li>
                        <li>Get them to take the pledge</li>
                      </ol>
                    </li>
                  </ol>
                </Typography>
                <Typography variant="h6">Prioritize Swing States!</Typography>
                <Typography variant="body">
                  <p>
                    It is of pivotal importance that we reach potential voters
                    in swing states. It is impossible to win this election
                    without a handful of critical swing states (such as PA,
                    FL, WI, MI, and AZ) going blue.{' '}
                    <strong>
                      Calling friends who live, have lived, or grew up in
                      swing states, should be our key focus, even if they are
                      not necessarily currently living/voting there.
                    </strong>{' '}
                    A larger chunk of their network will be people from that
                    state making it easier for them to reach people there in a
                    meaningful way.
                  </p>
                </Typography>

                <Typography variant="h6">The Swing States:</Typography>

                <img src={SwingStatesImg} alt="hello" width="100%"></img>
                <Typography variant="h6">
                  Finding Friends in Key States:
                </Typography>
                <Typography variant="body">
                  A great way to find people in your network who are from
                  swing states is on Facebook. Facebook has a feature where
                  you can use any search window to type “My friends who live
                  in [insert name of swing state].” The results list three
                  names with the option to “See all.”
                </Typography>
                <MuiBox display="flex" justifyContent="center">
                  <Box
                    width={[1, 1, 3 / 4]}
                    py={6}
                    bg="primary"
                    sx={{ opacity: '40%' }}></Box>
                </MuiBox>
              </div>
            </SectionDetails>
          </SectionAccordian>
          <Button color="primary" onClick={() => toggleExpand(!expand)}>
            Learn More {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={VoteImg1} width="100%" />
        </Grid>
      </Grid>
    </MuiBox>
  )
}

const WhoIsReachableBanner = () => {
  const [expand, toggleExpand] = useState(false)
  return (
    <MuiBox px={20} py={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={VoteImg2} width="100%" />
        </Grid>
        <Grid item xs={12} md={8}>
          <SectionAccordian expanded={expand}>
            <SectionSummary>
              <MuiBox>
                <Typography mb={3} variant="h4">
                  Who is actually reachable...
                </Typography>
                <Typography variant="body1" my={3}>
                  <p>
                    A lot of people actually, both left and right of center.
                  </p>
                  <p>
                    The key takeaway is that many people are more ready to
                    change their minds and hear different perspectives than our
                    polarized political framework would imply. These people,
                    ideologically, fall both left and right of center, but with
                    the right kind of conversation--one with a friend-- all are
                    potential Biden supporters.
                  </p>
                </Typography>
              </MuiBox>
            </SectionSummary>
            <SectionDetails>
              <Typography variant="body1">
                <p>
                  Our highly polarized public discourse suggests that there is
                  an irreconcilable divide between an ideologically fixed right
                  and left – a picture of America that is deceivingly
                  dichotomous and, perhaps, a bit overdramatic. A 2018 study
                  called “Hidden Tribes: A Study of America’s Polarized
                  Landscape” presents this issue as follows: “Political polls
                  and years of knife-edge elections have convinced many that our
                  country has become a 50:50 society, divided into two opposing
                  political tribes and trapped in a spiral of conflict and
                  division.” But, the study found, this is wrong. Instead, the
                  majority of Americans (around 67%) actually fall into a group
                  that they refer to as the Exhausted Majority:
                </p>
                <blockqoute>
                  <i>
                    In talking to everyday Americans, we have found a large
                    segment of the population whose voices are rarely heard
                    above the shouts of the partisan tribes. These are people
                    who believe that Americans have more in common than that
                    which divides them... The Exhausted Majority contains
                    distinct groups of people with varying degrees of political
                    understanding and activism. But they share a sense of
                    fatigue with our polarized national conversation, a
                    willingness to be flexible in their political viewpoints...
                    [a belief] that compromise is necessary in politics, as in
                    other parts of life, and [a desire] to see the country come
                    together and solve its problems.
                  </i>
                </blockqoute>
              </Typography>
            </SectionDetails>
          </SectionAccordian>
          <Button color="primary" onClick={() => toggleExpand(!expand)}>
            Learn More {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
      </Grid>
    </MuiBox>
  )
}

const WhyThisWorks = () => {
  const [expand, toggleExpand] = useState(false)
  return (
    <MuiBox px={20} py={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={8}>
          <SectionAccordian expanded={expand}>
            <SectionSummary>
              <MuiBox>
                <Typography mb={3} variant="h4">
                  Why this works…
                </Typography>
                <Typography variant="body1" my={3}>
                  <p>
                    Investigation into what motivates human behavior and changes
                    minds “indicates that … friends have a [notably] stronger
                    behavioral effect on each other than do … strangers.” Yet a
                    huge portion of traditional campaigning relies on
                    stranger-to-stranger communication (“A 61-million-person
                    Experiment in Social Influence and Political Mobilization.”)
                  </p>
                  <p>
                    Friendships and pre-existing relationships are a campaigning
                    resource that has not yet been thoroughly tapped. We believe
                    that by combining the efficient outreach technique of phone
                    calls with the personal connection of pre-existing
                    relationships – in effect,{' '}
                    <strong>highly personalized phone-banking</strong> – we can
                    achieve much higher campaign efficacy than ever before.
                  </p>
                </Typography>
              </MuiBox>
            </SectionSummary>
            <SectionDetails>
              <Typography variant="body1" mr={2}>
                <p>
                  People are much more likely to change their minds on important
                  issues as a result of discussing them with people within their
                  communal sphere of social and family connections. We are
                  profoundly influenced in our actions and beliefs by those we
                  perceive to be a part of our communities, and the closer we
                  perceive someone to be, the more their thinking and behavior
                  affects us. (See studies detailed in N.A. Christakis &; J.H.
                  Fowler, “Connected: The Surprising Power of Our Social
                  Networks and How They Shape Our Lives”) This holds true in the
                  political context. Conversations among friends, family, and
                  neighborly acquaintances have a large impact on whether and
                  how people vote. (People Who Talk Together Vote Together) This
                  impact can be profound. A 2016 study, “Voting to Tell Others,”
                  conducted by behavioral economists from UC Berkeley, the
                  University of Chicago, and Harvard found that “voter turnout
                  would increase by 2 percent if the number of times people were
                  asked if they voted doubled,” simply because people did not
                  want to have to lie in the future – to say they voted when
                  they really didn’t – when asked again.
                </p>
                <p>
                  Moreover, there are measurable correlations between how
                  frequently people talk about voting and how likely they are to
                  actually get out to vote. “Non-voters [] are more likely to
                  name no discussants [of politics] at all, reminding us that
                  political discussion is itself an indicator of political
                  engagement.” A Knight Foundation study, “The 100 Million
                  Project: The Untold Story of American Non- Voters,” surveyed
                  some “12,000 chronic non-voters nationally and in 10 swing
                  states, soliciting their views, attitudes and behaviors on a
                  wide range of topics.” It found that a conversation with a
                  trusted friend about how to vote was the second most
                  frequently listed factor that would motivate non-voters to
                  vote, behind a neutral source of information about candidates
                  and issues. Conversations with friends mobilize otherwise
                  uncommitted voters.
                </p>
                <p>
                  With public cynicism and distrust in institutions at an
                  all-time high, people need to hear from people they already
                  know and trust about the issues that matter.
                </p>
              </Typography>
            </SectionDetails>
          </SectionAccordian>
          <Button color="primary" onClick={() => toggleExpand(!expand)}>
            Learn More {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={VoteImg1} width="100%" />
        </Grid>
      </Grid>
    </MuiBox>
  )
}

export const HomeContentBanners = () => (
  <>
    <WhoToCallBanner />
    <WhoIsReachableBanner />
    <WhyThisWorks />
  </>
)
