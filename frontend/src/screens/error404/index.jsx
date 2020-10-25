import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { Link } from '@reach/router'

export const Error404 = () => (
  <Container sx={12} md={12}>
    <Typography variant="body1">
      Whoops. That page doesn't exist. Return <Link to="/"></Link>
    </Typography>
  </Container>
)
