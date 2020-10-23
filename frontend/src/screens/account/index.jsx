import React from 'react'
import { useSelector } from 'react-redux'
import { Ui } from './ui'

export const Account = () => {
  const { user } = useSelector((state) => state.auth)

  return <Ui user={user} />
}
