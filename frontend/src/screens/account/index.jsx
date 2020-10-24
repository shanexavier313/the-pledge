import React from 'react'
import { useSelector } from 'react-redux'
import { LayoutWrapper } from 'app/wrappers/layout'
import { Ui } from './ui'

export const Account = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <LayoutWrapper>
      <Ui user={user} />
    </LayoutWrapper>
  )
}
