/* eslint-disable jsx-a11y/aria-role */
import React from 'react'
import { Button, Box } from '@material-ui/core'
import { Link } from '@reach/router'

export const ButtonLink = (props) => (
  <Box my={1} ml={1}>
    <Button component={Link} role={null} aria-disabled={null} {...props} />
  </Box>
)
