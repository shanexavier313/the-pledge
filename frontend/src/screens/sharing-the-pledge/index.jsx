import React from 'react'
import { LayoutWrapper } from 'app/wrappers/layout'
import { Box, Grid, Link, Typography, Container } from '@material-ui/core'

export const SharingThePledge = () => (
  <LayoutWrapper>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bgcolor="base.300"
      px={'10vh'}
      py={2}>
      <Box mb={1}>
        <Typography variant="h4">
          <b>Sharing The Pledge</b>
        </Typography>
      </Box>
      <Typography variant="h6">
        Do you have friends, family or acquaintances in your network interested
        in making the pledge? We want to make it easy.
      </Typography>
    </Box>
    <Grid container direction="column" alignItems="center" justify="center">
      <Container>
        <Box border={1} my={2} p={2} borderColor="primary.main">
          <Typography variant="h6">Sample text language:</Typography>
          <Typography variant="body1">
            <p>
              <i>
                Hi X. The election is in X days, and I made a pledge to call 5
                members of my friend group to encourage them to vote for Biden.
                Here’s how you can take the pledge to join me:{' '}
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://sharethepledge.com">
                  sharethepledge.com
                </Link>
              </i>
            </p>
          </Typography>
          <Typography variant="h6">Sample email language:</Typography>
          <Typography variant="body1">
            <p>
              <i>
                Hey, X:
                <br />I hope you’re doing well. We are X days from the election.
                I am reaching out because I have made a pledge to call my family
                and friends to make sure they have a plan for voting and
                encourage them to vote for Biden. I did this through a website
                called The Pledge.
                <br />I think you would be great at this - it’s a good way to
                stay energized and motivated in the lead-up to the election and
                can potentially have a real impact on turnout. Here’s how to
                take the pledge:{' '}
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://sharethepledge.com">
                  sharethepledge.com
                </Link>
              </i>
            </p>
          </Typography>
        </Box>
      </Container>
    </Grid>
  </LayoutWrapper>
)
