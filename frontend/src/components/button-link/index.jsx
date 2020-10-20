/* eslint-disable jsx-a11y/aria-role */
import React from 'react'
import { Button } from 'rebass'
import { Link } from '@reach/router'

export const ButtonLink = (props) => (
  <Button as={Link} role={null} aria-disabled={null} {...props} />
)
