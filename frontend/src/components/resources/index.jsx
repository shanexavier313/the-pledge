import React from 'react'
import styled from 'styled-components'
import { Box, Typography } from '@material-ui/core'
import { SlideStepper } from 'components/slide-stepper'
import { framework1Slides, framework2Slides } from './slides'
import FrameworksIntro1 from 'static/images/frameworks-intro1.png'
import FrameworksIntro2 from 'static/images/frameworks-intro2.png'

export const DemographicsResource = () => (
  <>
    <Box textAlign="center" mb={2}>
      <Typography variant="h6">
        <strong>
          Use this resource to assess where you think the friend that you plan
          to talk to most likely falls on the political spectrum and to prepare
          for what you may encounter in the conversation as a result.
        </strong>
      </Typography>
    </Box>
    <Typography variant="body1">
      <p>
        People often present their political views – even to themselves – as
        factual statements of how things are and how things should be. But the
        truth is that our views are almost always the product of our feelings
        and our value systems. We use facts and data to help us justify what we
        feel, more than we do to determine what we feel.
      </p>
      <Box textAlign="center">
        <p>
          <strong>
            <i>
              It can be hard to have a successful conversation with
              <br /> someone if we don’t understand the emotions and values that
              motivate their views.
            </i>
          </strong>
        </p>
      </Box>
      <p>
        Despite intense political differences, everyone’s beliefs and values
        overlap to some degree. Differences in views arise because we all
        (usually subconsciously) prioritize certain values over others, in a way
        that can sometimes change from context-to-context.
      </p>
      <p>
        This resource helps us break down our most basic and fundamental value
        frameworks and identifies patterns of how individual value systems map
        to different political beliefs. If we can assess where our friend most
        likely falls on the political spectrum, we can gain insight into the
        values they hold most central to their world views, and thus can be
        better prepared for having productive conversations.
      </p>
      <p>
        Because we all share the same values – though to differing degrees – we
        can always tap into our innate understanding of one others’ values and
        beliefs, if we try.
      </p>
    </Typography>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <Box
        width="80%"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <img src={FrameworksIntro1} alt="frameworks-intro1" width="60%" />
        <img src={FrameworksIntro2} alt="frameworks-intro2" width="60%" />
      </Box>
      <SlideStepper slides={framework1Slides} />
      <SlideStepper slides={framework2Slides} />
    </Box>
  </>
)

export const CommonViewsResource = () => (
  <Box textAlign="center" mb={2}>
    <Typography variant="body1">
      <p>Common Views</p>
    </Typography>
  </Box>
)

export const ConversationGuideResource = () => (
  <Typography variant="body1">
    <p>
      Now that we have a sense of the different types of political identities
      and value systems that people hold, let’s get into the weeds: the
      conversations.
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
        <strong>
          Here's a breakdown of the the key issues in the upcoming election,
          focused on common misconceptions.
        </strong>
      </p>
    </Typography>
  </Box>
)

export const SwingStatesResource = () => (
  <Typography variant="body1">DemographicBreakdown</Typography>
)
