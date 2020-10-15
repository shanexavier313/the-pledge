import React from 'react'
import { Flex } from 'rebass'
import { SignUpForm } from 'components/forms/sign-up'

export const SignUp = () => (
  <Flex
    variant="content.normal"
    sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
    <SignUpForm />
  </Flex>
)
