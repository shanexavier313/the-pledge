import React from 'react'
import { DesktopFooter } from './desktop-footer'
import { DesktopNav } from './desktop-nav'
import { Content, Root, NavWrapper, FooterWrapper } from './styles'

export const LayoutWrapper = ({ children }) => (
  <Root>
    <NavWrapper>
      <DesktopNav />
    </NavWrapper>
    <Content>{children}</Content>
    <FooterWrapper>
      <DesktopFooter />
    </FooterWrapper>
  </Root>
)
