import React from 'react'
import { Button, Box, Input, Label } from 'theme-ui'

export const LoginForm = () => (
  <Box
    my={5}
    py={6}
    px={6}
    as="form"
    onSubmit={e => e.preventDefault()}
    sx={{
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'primary',
    }}
  >
    <Label htmlFor="email" color="base800" variant="text.body.small">
      Email
    </Label>
    <Input name="email" id="email" mb={3} />
    <Label htmlFor="password" color="base800" variant="text.body.small">
      Password
    </Label>
    <Input type="password" name="password" id="password" mb={3} />
    <Button type="submit" variant="buttons.secondary">
      Login
    </Button>
  </Box>
)
