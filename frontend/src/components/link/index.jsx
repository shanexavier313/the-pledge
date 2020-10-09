import React from 'react'
import { Link as RebassLink } from 'rebass'
import { Link as RouterLink } from '@reach/router'

export const Link = props => <RebassLink as={RouterLink} {...props} />
