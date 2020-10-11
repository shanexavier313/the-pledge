import React from 'react'
import { Flex } from 'theme-ui'
import { LoginForm } from '../../components/forms/login'

export const Login = () => (
  <Flex
    variant="content.normal"
    sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
  >
    <LoginForm />
  </Flex>
)
