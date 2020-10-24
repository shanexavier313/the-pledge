/* eslint-disable jsx-a11y/aria-role */
import React from 'react'
import { Button, Link } from '@material-ui/core'

export const LinkButton = (props) => (
  <Button {...props}>
    <Link
      target="_blank"
      rel="noreferrer noopener"
      href={props.href}
      color={props.linkColor}>
      {props.children}
    </Link>
  </Button>
)
