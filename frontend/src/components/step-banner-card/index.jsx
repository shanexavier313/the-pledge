import React from 'react'
import styled from 'styled-components'
import { Box, Card } from '@material-ui/core'
const MuiCard = styled(Card)`
  && {
    text-align: center;
    width: 240px;
    height: 144px;
    background-color: white;
    margin-bottom: 1rem;
    .title {
      opacity: 20%;
    }
  }
`
export const StepBannerCard = ({ stepID, primaryText }) => (
  <MuiCard>
    <Box m={0.5} px={0.5} pt={1} pb="auto">
      <Box fontSize="h5.fontSize" mb={0.5} className="title">
        {stepID}
      </Box>
      <Box fontSize="body1.fontSize" fontWeight="fontWeightBold">
        {primaryText}
      </Box>
    </Box>
  </MuiCard>
)
