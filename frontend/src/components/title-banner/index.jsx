import React from 'react'
import { Flex, Heading, Text } from 'rebass'
import { Button } from 'theme-ui'
import { navigate } from '@reach/router'
import { Box, Paper, Typography } from '@material-ui/core'

export const TitleBanner = ({ content, children }) => {
  return (
    <Flex
      mx="auto"
      variant="content.normal"
      bg={content.bg}
      sx={{
        width: '100%',
        minHeight: '40vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
      {content.title && (
        <Typography variant="h5" mt={1} mb={4}>
          <strong>{content.title}</strong>
        </Typography>
      )}
      {content.description && content.ctaText && (
        <Box
          bgcolor="secondary.main"
          borderRadius={'5px'}
          p={2}
          textAlign="center"
          color="text.white">
          <Typography variant="h6">
            <strong>{content.description}</strong>
          </Typography>
        </Box>
      )}
      {content.description && !content.ctaText && (
        <Box width="100%" p={1} textAlign="center" color="text.primary">
          <Typography variant="body1">{content.description}</Typography>
        </Box>
      )}

      {content.subDescription && (
        <Box width="100%" pb={2} textAlign="center" color="text.primary">
          <Typography variant="body1">{content.subDescription}</Typography>
        </Box>
      )}

      {content.ctaText && (
        <Button
          onClick={() => navigate('the-why')}
          variant="buttons.tertiary"
          my={3}
          px={2}
          bg="white"
          color="secondary"
          sx={{ boxShadow: 'small' }}>
          <strong>{content.ctaText} ></strong>
        </Button>
      )}
    </Flex>
  )
}
