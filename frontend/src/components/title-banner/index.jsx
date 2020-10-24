import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Box, Typography, Button } from '@material-ui/core'

const TitleContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  background-color: ${(props) => props.bg};
  min-height: 40vh;
  width: 100%;
`
const TitleBox = styled(Box)`
  && {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`

export const TitleBanner = ({ content, children }) => {
  return (
    <TitleContainer bg={content.bg}>
      <TitleBox p={2}>
        {children}
        {content.title && (
          <Typography variant="h4" mt={1} mb={4}>
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
          <Box
            width="100%"
            p={1}
            textAlign="center"
            className="description"
            color="primary">
            <Typography variant="body1">{content.description}</Typography>
          </Box>
        )}

        {content.ctaText && (
          <Box my={3} px={2}>
            <Button
              onClick={() => navigate('the-why')}
              color="primary"
              variant="contained">
              <strong>{content.ctaText}</strong>
            </Button>
          </Box>
        )}
      </TitleBox>
    </TitleContainer>
  )
}
