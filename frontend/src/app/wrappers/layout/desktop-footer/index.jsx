// eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
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
`;

export const DesktopFooter = () => (
  <DesktopFooterWrapper container alignItems="center">
    <Grid item xs={6} className="left-content">
      <Box fontWeight={600} fontSize="h6.fontSize" my={0.5}>
        The Pledge
      </Box>
      <Typography variant="body2" component="body2">
        We need to get as many American citizens registered and planning to vote
        for Biden as possible! Trump has verbally stated that he will contest
        this election, and that he does not intend to pass power peacefully.
      </Typography>
    </Grid>
    <Grid item container xs={6} className="right-content">
      <Grid item xs={6}>
        <FooterMenu>
          <li>
            <Link className="footer-link" to="/">
              Demographic Breakdown
            </Link>
          </li>
          <li>
            <Link className="footer-link" to="/">
              Commonly Held Views
            </Link>
          </li>
          <li>
            <Link className="footer-link" to="/">
              Key Issues
            </Link>
          </li>
          <li>
            <Link className="footer-link" to="/">
              Swing State Information
            </Link>
          </li>
        </FooterMenu>
      </Grid>
      <Grid item xs={6}>
        <FooterMenu>
          <li>
            <Link className="footer-link" to="/">
              About the Pledge
            </Link>
          </li>
          <li>
            <Link className="footer-link" to="/">
              Contact Us
            </Link>
          </li>
        </FooterMenu>
      </Grid>
    </Grid>
  </DesktopFooterWrapper>
)
