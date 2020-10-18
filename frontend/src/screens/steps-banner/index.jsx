import React from 'react'
import { navigate } from '@reach/router'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'
import { StepBannerCard } from 'components/step-banner-card'
import { steps, stepsBanner } from 'content'
import { theme } from 'styles/theme'

export const StepsBanner = () => (
  <Flex
    mx="auto"
    bg={theme.colors.base300}
    variant="content.normal"
    sx={{
      width: '100%',
    }}>
    <Flex
      px={2}
      py={4}
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box mx="auto" px={2} sx={{ textAlign: 'center' }}>
        <Heading variant="text.h4" mb={2}>
          {stepsBanner.title}
        </Heading>
        <Text variant="text.body.small" mb={4} sx={{ textAlign: 'center' }}>
          {stepsBanner.description}
        </Text>
      </Box>
      <Flex
        sx={{
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {steps.map((step) => (
          <StepBannerCard
            key={step.stepID}
            stepID={step.stepID}
            primaryText={step.primary}></StepBannerCard>
        ))}
      </Flex>
      <Button
        onClick={() => navigate('steps')}
        variant="buttons.primary"
        px={5}
        sx={{ '&:hover': { boxShadow: 'small' } }}>
        Learn More >
      </Button>
    </Flex>
  </Flex>
)
