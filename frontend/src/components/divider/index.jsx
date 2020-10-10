import React from 'react'
import { Box } from 'rebass'

export const Divider = props => (
  <Box
    as="vl"
    mx={3}
    sx={{
      bg: 'white',
      width: 1,
      height: 100,
      borderRadius: 1 / 2,
    }}
    {...props}
  />
)
