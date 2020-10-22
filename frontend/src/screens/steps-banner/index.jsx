import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Box, Button, Typography } from '@material-ui/core'
import { StepBannerCard } from 'components/step-banner-card'
import { steps, stepsBanner } from 'content'
import { theme } from 'styles/theme'

const StepsBannerContainer = styled.div`
  background-color: ${(props) => props.bg};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`
const StepsBannerContent = styled(Box)`
  && {
    background-color: ${(props) => props.bg};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .learn-more {
      padding-right: 3rem;
      padding-left: 3rem;
    }
  }
`

const StepsContent = styled(Box)`
  && {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-itemns: center;
    width: 100%;
  }
`
export const StepsBanner = () => (
  <StepsBannerContainer bg={theme.colors.base300}>
    <StepsBannerContent px={2} py={4}>
      <Box mx="auto" px={2} mb={1} textAlign="center" className="title-wrapper">
        <Typography variant="h4">{stepsBanner.title}</Typography>
      </Box>
      <StepsContent mb={1}>
        {steps.map((step) => (
          <StepBannerCard
            key={step.stepID}
            stepID={step.stepID}
            primaryText={step.primary}></StepBannerCard>
        ))}
      </StepsContent>

      <Button
        onClick={() => navigate('steps')}
        variant="contained"
        className="learn-more"
        color="primary">
        Learn More >
      </Button>
    </StepsBannerContent>
  </StepsBannerContainer>
)
