import React from 'react'
import { Ui } from './ui'
import { getUser } from 'domains/identity'

export const Account = () => {
  const user = getUser()

  return <Ui user={user} />
}
