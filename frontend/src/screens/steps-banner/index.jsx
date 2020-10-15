import React from 'react'
import { Box, Flex, Heading, Text } from 'theme-ui'
import { ButtonLink } from 'components/button-link'
import { steps } from 'content'
import { theme } from 'styles/theme'
import { StepCard } from './step-card'

export const StepsBanner = () => {
  const content = {
    title: 'Step by Step',
    description:
      "We need to get as many American citizens registered and planning to vote for Biden as possible! Trump has verbally stated that he will contest this election, and that he does not intend to pass power peacefully. He's stacking the Supreme Court now! ",
  }

  return (
    <Flex
      mx="auto"
      bg={theme.colors.base300}
      variant="content.normal"
      sx={{
        width: '100%',
      }}
    >
      <Flex
        px={2}
        py={4}
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box mx="auto" px={2} sx={{ textAlign: 'center' }}>
          <Heading variant="text.h4" mb={2}>
            {content.title}
          </Heading>
          <Text variant="text.body.small" mb={4} sx={{ textAlign: 'center' }}>
            {content.description}
          </Text>
        </Box>
        <Flex
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {steps.map(step => (
            <StepCard
              key={step.stepID}
              stepID={step.stepID}
              primaryText={step.primary}
            ></StepCard>
          ))}
        </Flex>
        <ButtonLink
          to="steps"
          variant="buttons.primary"
          px={5}
          sx={{ '&:hover': { boxShadow: 'small' } }}
        >
          Learn More >
        </ButtonLink>
      </Flex>
    </Flex>
  )
}
