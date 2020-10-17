import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Alert } from 'components/alert'
import { DesktopFooter } from './desktop-footer'
import { DesktopNav } from './desktop-nav'
import { Content, Root, NavWrapper, FooterWrapper } from './styles'

export const LayoutWrapper = ({ children }) => {
  const dispatch = useDispatch()
  const { message, isError } = useSelector((state) => state.alert)
  const content = (
    <Content>
      {message && <Alert isError={isError}>{message}</Alert>}
      {children}
    </Content>
  )

  return (
    <Root>
      <NavWrapper>
        <DesktopNav />
      </NavWrapper>
      {content}
      <FooterWrapper>
        <DesktopFooter />
      </FooterWrapper>
    </Root>
  )
}
