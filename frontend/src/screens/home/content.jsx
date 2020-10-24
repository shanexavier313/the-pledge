import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Link,
  Grid,
  Button,
  Typography,
} from '@material-ui/core'
import { S3_BUCKET } from 'domains/constants'

const PhoneImg = `${S3_BUCKET}/images/phone.jpg`
const VoteImg2 = `${S3_BUCKET}/images/element5-digital-2i7Dn2uMEQE-unsplash.jpg`
const ReachableImg = `${S3_BUCKET}/images/reachable.jpg`
const SwingStatesImg = `${S3_BUCKET}/images/swingstates.jpg`
const FacebookImg = `${S3_BUCKET}/images/facebook.jpg`

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
    <Box px={4} py={2}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={10}>
          <SectionAccordian expanded={expand}>
            <SectionSummary>
              <Box>
                <Typography mb={3} variant="h4">
                  Who To Call
                </Typography>
                <Typography variant="body1">
                  <p>
                    President Trump has stated that he will contest this
                    election, and that he does not intend to pass power
                    peacefully. We need to win in key swing states, but, more
                    importantly, we need a landslide to ensure that this
                    election is decided by the people and not by President
                    Trump's new ultraconservative Supreme Court. We need to get
                    as many Americans registered and planning to vote for Biden
                    as possible.
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
              </Box>
            </SectionSummary>
            <SectionDetails>
              <Box>
                <Typography variant="h6">Here’s who to call:</Typography>
                <Typography variant="body">
                  <ol>
                    <li>
                      <strong>Likelies:</strong> Friends who are likely Biden
                      supporters, but who may need a push to get registered or
                      to actually vote.
                      <ol type="a">
                        <li>
                          Help them get registered and ready to vote for Biden.
                        </li>
                        <li>Encourage them to take the pledge</li>
                      </ol>
                    </li>
                    <li>
                      <strong>Already energized:</strong> Friends who are
                      already activated to stop Trump and are looking for a way
                      to help.
                      <ol type="a">
                        <li>Encourage them to take the pledge.</li>
                      </ol>
                    </li>
                    <li>
                      <strong>Unknowns/Non-liberals:</strong> Friends who may
                      not be planning to vote for Biden
                      <ol type="a">
                        <li>
                          Call them to understand where they’re coming from, to
                          share your own perspective, and to encourage them to
                          vote blue.
                        </li>
                        <li>
                          Help them get registered and, when possible, ready to
                          vote for Biden.
                        </li>
                        <li>Encourage them to take the pledge.</li>
                      </ol>
                    </li>
                  </ol>
                </Typography>
                <Typography variant="h6">Prioritize Swing States!</Typography>
                <Typography variant="body">
                  <p>
                    It is critical that we reach potential voters in swing
                    states (e.g., PA, FL, WI, MI, and AZ), because this election
                    is impossible to win without them.
                    <strong>
                      Calling friends who live, have lived, or grew up in swing
                      states is our focus, even if they are not currently voting
                      there.
                    </strong>{' '}
                    Larger chunks of <i>their</i> networks will be people from
                    that state, making it easier for them to reach people in an
                    authentic way.
                  </p>
                </Typography>
                <Typography variant="h6">The Swing States:</Typography>
                <Box my={1} display="flex" justifyContent="center">
                  <img src={SwingStatesImg} alt="hello" width="100%"></img>
                </Box>
                <Typography variant="h6">
                  Finding Friends in Key States:
                </Typography>
                <Typography variant="body">
                  Facebook has a feature where you can use any search window to
                  type “My friends who live in [insert name of swing state].”
                  The results list three names with the option to “See all.”
                </Typography>
                <Box my={1} display="flex" justifyContent="center">
                  <img src={FacebookImg} alt="hello" width="100%"></img>
                </Box>
              </Box>
            </SectionDetails>
          </SectionAccordian>
          <Button color="primary" onClick={() => toggleExpand(!expand)}>
            Learn More {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
        <Grid item xs={12} md={2}>
          <img src={PhoneImg} width="100%" alt="phone" />
        </Grid>
      </Grid>
    </Box>
  )
}

const WhoIsReachableBanner = () => {
  const [expand, toggleExpand] = useState(false)
  return (
    <Box px={4} py={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={2}>
          <img src={ReachableImg} width="100%" alt="reachable" />
        </Grid>
        <Grid item xs={12} md={10}>
          <SectionAccordian expanded={expand}>
            <SectionSummary>
              <Box>
                <Typography mb={3} variant="h4">
                  Who is actually reachable...
                </Typography>
                <Typography variant="body1">
                  <p>
                    A lot of people actually, both left and right of center.
                  </p>
                  <p>
                    Our polarized public discourse suggests that there is an
                    irreconcilable divide between an ideologically fixed right
                    and left. Yet,{' '}
                    <strong>
                      many people are more ready to change their minds and hear
                      different perspectives than our polarized political
                      framework would imply.
                    </strong>{' '}
                    These people, ideologically, fall both left and right of
                    center, but with the{' '}
                    <strong>right kind of conversation</strong> - one with a
                    friend - all are potential Biden supporters.
                  </p>
                </Typography>
              </Box>
            </SectionSummary>
            <SectionDetails>
              <Typography variant="body1">
                <p>
                  Our culture’s polarized picture of America is a bit over
                  dramatic. “Political polls and years of knife-edge elections
                  have convinced many that our country has become a 50:50
                  society, divided into two opposing political tribes and
                  trapped in a spiral of conflict and division.” A 2018 study
                  called{' '}
                  <Link href="https://hiddentribes.us/">
                    “HiddenTribes: A Study of America’s Polarized Landscape”
                  </Link>{' '}
                  found that{' '}
                  <strong>
                    <i>this dichotomy was wrong.</i>
                  </strong>{' '}
                  Instead, the majority of Americans (
                  <strong>around 67%</strong>) actually fall into a group that
                  they refer to as the <strong>Exhausted Majority</strong>:
                </p>
                <p>
                  <i>
                    In talking to everyday Americans, we have found a large
                    segment of the population whose voices are rarely heard
                    above the shouts of the partisan tribes. These are people
                    who believe that Americans have more in common than that
                    which divides them...
                    <br />
                    <br />
                    The Exhausted Majority contains distinct groups of people
                    with varying degrees of political understanding and
                    activism. But they share a sense of fatigue with our
                    polarized national conversation, a willingness to be
                    flexible in their political viewpoints... [a belief] that
                    compromise is necessary in politics, as in other parts of
                    life, and [a desire] to see the country come together and
                    solve its problems.
                  </i>
                </p>
              </Typography>
            </SectionDetails>
          </SectionAccordian>
          <Button color="primary" onClick={() => toggleExpand(!expand)}>
            Learn More {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

const WhyThisWorks = () => {
  const [expand, toggleExpand] = useState(false)
  return (
    <Box px={4} py={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={10}>
          <SectionAccordian expanded={expand}>
            <SectionSummary>
              <Box>
                <Typography mb={3} variant="h4">
                  Why this works…
                </Typography>
                <Typography variant="body1">
                  <p>
                    Studies of what motivates behavior and changes minds show
                    that “friends have a [notably] stronger behavioral effect on
                    each other” than strangers do. Yet a huge portion of
                    traditional campaigning strategy relies on
                    stranger-to-stranger communication (
                    <Link href="https://www.nature.com/articles/nature11421">
                      Study
                    </Link>
                    ).
                  </p>
                  <p>
                    Friendships and pre-existing relationships are a campaigning
                    resource that has not yet been thoroughly tapped. We believe
                    that by combining the efficient outreach technique of phone
                    calls with the personal connection of pre-existing
                    relationships – in effect,{' '}
                    <strong>highly personalized phone-banking</strong>– we can
                    achieve much higher campaign efficacy than ever before.
                  </p>
                </Typography>
              </Box>
            </SectionSummary>
            <SectionDetails>
              <Typography variant="body1" mr={2}>
                <p>
                  People are much more likely to change their minds on important
                  issues when they discuss them with people within their sphere
                  of social and family connections. We are profoundly influenced
                  in our actions and beliefs by people we see as part of our
                  communities, and{' '}
                  <strong>
                    the closer we perceive someone to be, the more their
                    thinking and behavior affects us.
                  </strong>{' '}
                  (See studies detailed in book{' '}
                  <Link href="http://www.connectedthebook.com/">
                    “Connected”
                  </Link>
                  ) This holds true for political beliefs and activity (like
                  voting). Conversations among friends, family, and neighborly
                  acquaintances have a large impact on whether and how people
                  vote. (
                  <Link href="https://www.jstor.org/stable/1515378?seq=1">
                    People Who Talk Together Vote Together
                  </Link>
                  ). A 2016 study called “
                  <Link href="https://academic.oup.com/restud/article/84/1/143/2684500">
                    Voting to Tell Others
                  </Link>
                  ,” found that “voter turnout would increase by 2 percent if
                  the number of times people were asked if they voted doubled,”
                  simply because people did not want to have to lie – that is,
                  to say they voted when they really didn’t – when asked again.
                </p>
                <p>
                  Moreover, there are measurable correlations between how
                  frequently people talk about voting and how likely they are to
                  actually get out to vote.{' '}
                  <Link href="https://www.britishelectionstudy.com/bes-resources/are-we-influenced-by-how-our-friends-vote/#.X5EcK9NKiWY">
                    Surveys
                  </Link>{' '}
                  find that chronic non-voters are often unable to name anyone
                  at all with whom they discuss politics, which “remind[s] us
                  that{' '}
                  <strong>
                    political discussion is itself an indicator of political
                    engagement.” Just talking to people about voting makes them
                    more likely to vote!
                  </strong>{' '}
                  A Knight Foundation study, “
                  <Link href="https://knightfoundation.org/reports/the-100-million-project/">
                    The 100 Million Project
                  </Link>
                  ,” surveyed some “12,000 chronic non-voters nationally and in
                  10 swing states, soliciting their views, attitudes and
                  behaviors on a wide range of topics.” It found that a
                  conversation with a trusted friend about how to vote was the
                  second most frequently listed factor that would motivate
                  non-voters to vote (behind a neutral source of information
                  about candidates and issues). Conversations with friends
                  mobilize otherwise uncommitted voters.
                </p>
                <p>
                  With public cynicism and distrust in institutions at an
                  all-time high, people need to hear from people they already
                  know and trust about the issues that matter, and about why
                  their vote matters.
                </p>
              </Typography>
            </SectionDetails>
          </SectionAccordian>
          <Button color="primary" onClick={() => toggleExpand(!expand)}>
            Learn More {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
        <Grid item xs={12} md={2}>
          <img src={VoteImg2} width="100%" alt="voteimg" />
        </Grid>
      </Grid>
    </Box>
  )
}

export const HomeContentBanners = () => (
  <>
    <WhoToCallBanner />
    <WhoIsReachableBanner />
    <WhyThisWorks />
  </>
)
