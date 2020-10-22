import React from 'react'
import { Flex } from 'theme-ui'
import { Ui } from './ui'
import { getUser } from 'domains/identity'

export const Profile = () => {
  const user = getUser()

  return <Ui user={user} />
}
