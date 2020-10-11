import React from 'react'
import { Box } from 'rebass'

export const Divider = () => (
  <Box
    mx={4}
    sx={{
      bg: 'base800',
      width: 1,
      height: 100,
      borderRadius: 1 / 2,
    }}
  />
)
