// eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'
import { Box, Grid, Link as MuiLink, Typography } from '@material-ui/core'
import { Link } from 'components/link'

const DesktopFooterWrapper = styled(Grid)`
  && {
    padding: 1rem 0;
    .right-content {
      border-left: 1px solid black;
    }
    .right-content,
    .left-content {
      padding: 1rem 2rem;
    }
    .left-content {
      padding-left: 0;
    }
  }
`

const FooterMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

const StyledFooterLink = styled(MuiLink)`
  && {
    box-sizing: border-box;
    min-width: 0px;
    font-family: Inter, system-ui, sans-serif;
    line-height: 1.5;
    text-decoration: none;
    padding-left: 8px;
    padding-right: 8px;
    color: #f0682f;
    font-size: 16px;
    margin: 8px 4px;
    font-weight: 600;
    &:hover {
      color: rgb(134, 142, 150);
    }
  }
`

export const DesktopFooter = () => (
  <DesktopFooterWrapper container alignItems="center">
    <Grid item xs={6} className="left-content">
      <Box fontWeight={600} fontSize="h6.fontSize" my={0.5}>
        The Pledge
      </Box>
      <Typography variant="body2" component="body2">
        The pledge is our commitment to calling 5 or more people you know before
        November 3rd and encouraging them to vote blue down the ballot — to get
        politicians who threaten our democracy out of office.
      </Typography>
    </Grid>
    <Grid item container xs={6} className="right-content">
      <Grid item xs={6}>
        <FooterMenu>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="resources">
              Resources
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="the-why">
              The Why
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="steps">
              Step by Step
            </Link>
          </li>
        </FooterMenu>
      </Grid>
      <Grid item xs={6}>
        <FooterMenu>
          <li>
            <Link className="nav-link" to="sharing-the-pledge">
              Sharing the Pledge
            </Link>
          </li>
          <li>
            <StyledFooterLink href="mailto:sharethepledge.com">
              Contact Us
            </StyledFooterLink>
          </li>
        </FooterMenu>
      </Grid>
    </Grid>
  </DesktopFooterWrapper>
)
