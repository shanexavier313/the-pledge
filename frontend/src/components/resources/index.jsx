import React from 'react'
import { Box, Link, Typography, Grid } from '@material-ui/core'
import { SlideStepper } from 'components/slide-stepper'
import { StateStepper } from 'components/state-stepper'
import { framework1Slides, framework2Slides, swingStateSlides } from './slides'
import { S3_BUCKET } from 'domains/constants'
const FrameworksIntro1 = `${S3_BUCKET}/images/frameworks-intro1.png`
const FrameworksIntro2 = `${S3_BUCKET}/images/frameworks-intro2.png`

export const PoliticalIdentitiesResource = () => (
  <>
    <Box textAlign="center" mb={2}>
      <Typography variant="h6">
        <strong>
          To talk to people about challenging topics, we need to understand
          where they might fall on the political spectrum. The Political
          Identities resource is here to help us think with more nuance about
          beliefs and motivations.
        </strong>
      </Typography>
    </Box>
    <Typography variant="body1">
      <p>
        People often present their political views – even to themselves – as
        factual statements of how things are and how things should be. But our
        views are almost always the product of our feelings and our value
        systems (yes, even yours!). We often use facts and data to help us
        justify what we feel, more than to inform what we should feel.
      </p>
      <p>
        Despite intense political differences, everyone’s beliefs and values
        overlap to some degree. If we can assess where our friend most likely
        falls on the political spectrum, we can gain insight into the values
        most central to their world views and be better prepared for having
        productive conversations. We can tap into our innate understanding of
        one others’ values and beliefs, if we try.
      </p>
    </Typography>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <Grid container>
        <Grid item xs={12} lg={6}>
          <img src={FrameworksIntro1} alt="frameworks-intro1" width="100%" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <img src={FrameworksIntro2} alt="frameworks-intro2" width="100%" />
        </Grid>
      </Grid>
      <SlideStepper slides={framework1Slides} />
      <br />
      <SlideStepper slides={framework2Slides} />
    </Box>
  </>
)

export const CommonViewsResource = () => (
  <Box textAlign="center" mb={2}>
    <Typography variant="body1">
      <p>
        Once we assess where our friends most likely fall on the political
        spectrum, we can prepare for some of the views that may come up in our
        conversation with them.
        <b>
          There are an infinite number of political views that could come up in
          a conversation about politics, and we cannot be prepared to address
          all of them.
        </b>
      </p>
      <p>
        Getting into the weeds on a particular issue may sometimes be necessary,
        but it’s helpful to frame your broader intention in the conversation
        with an overall goal of{' '}
        <b>
          saying what your friend needs to hear to be motivated to vote for
          Biden
        </b>{' '}
        - and saying it in a way that they can hear. Though people may claim to
        be concerned about an issue, what they need to hear may actually be much
        “bigger picture” than that.
      </p>
      <p>
        Once you’ve assessed where your friend likely falls on the political
        spectrum, give these common views and responses a look. These responses
        are not meant to provide exact language for a response; instead, they
        are meant to provide you with perspective on what a thoughtful response
        might look like/include.
      </p>
    </Typography>
  </Box>
)

export const ConversationGuideResource = () => (
  <Typography variant="body1">
    <p>
      Now that we have a sense of the different types of political identities
      and value systems that people hold, let’s get into the weeds: the
      conversations
    </p>
    <p>
      <strong>The real work happens here.</strong>
    </p>
    <p>
      This is a resource of tips and tricks for navigating phone calls in a
      healthy way. What might we hear on calls, and how might we respond
      thoughtfully? How do we challenge others from a place of care, rather than
      from a place of judgment? The point of these tips is to help us manage our
      emotions and communication styles so that we can have productive,
      respectful conversations. While we can’t predict what every (or, for that
      matter, any!) conversation will look like, we can build a shared toolkit
      that can be adapted to different contexts.
    </p>
    <p>
      <strong>The work is messy, and we’re capable of doing it.</strong>
    </p>
  </Typography>
)

export const KeyIssuesResource = () => (
  <Box textAlign="center">
    <Typography variant="body1">
      <p>
        This resource is here to provide a breakdown of the main issues that are
        central to this election. We provide an overview, as well as common
        misconceptions that might come up when folks who identify as
        conservative engage with the issue.
      </p>
    </Typography>
  </Box>
)

export const SwingStatesResource = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center">
    <Typography variant="h6">
      <Box textAlign="center">
        <b>
          This resource is here to help you learn more about the critical places
          that will drive important outcomes on November 3rd.
        </b>
      </Box>
    </Typography>
    <Typography variant="body1">
      <p>
        These sites collectively (and perhaps even individually) have all the
        information you, or your friend/callee could possibly need about voting
        on a state by state basis from important dates to registration services
        to down ballot election information (including links to candidates
        websites) to first-time-voter checklists, tips, and advice, these
        websites have it all. Send your friend these links to help them get/stay
        organized after your call!
      </p>
    </Typography>
    <Box mb={2} border={1} borderColor="primary.main">
      <Typography variant="body1">
        <ul>
          <li>
            <Link href="https://www.vote411.org/ballot">Vote411</Link>:
            Everything. Important dates, down ballot race information and links
            to candidate websites, registration links and check sites, polling
            place information, etc.
          </li>
          <li>
            <Link href="https://www.headcount.org/verify-voter-registration/?source=HChomepage">
              Headcount
            </Link>
            : Also everything.
          </li>
          <li>
            <Link href="https://www.voteamerica.com/">VoteAmerica</Link>: Easy
            registration, find out where to vote, track your ballot, check your
            registration status, register to vote, vote by mail information,
            request your absentee ballot, receive election reminders, contact
            your election office, etc.
          </li>
          <li>
            <Link href="https://www.nytimes.com/interactive/2020/09/24/us/politics/how-to-vote-register.html">
              NYTimes Interactive How-to-vote/register
            </Link>
            : Key dates, registration info, detailed/helpful voting information.
            Requires NYT login.
          </li>
          <li>
            <Link href="https://www.usa.gov/voter-registration">
              usa.gov/voter-registration
            </Link>
            : Voter registration checks and info.
          </li>
        </ul>
      </Typography>
    </Box>
    <StateStepper slides={swingStateSlides} />
  </Box>
)
