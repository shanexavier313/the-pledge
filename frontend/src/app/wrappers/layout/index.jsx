import React from 'react'
import Hidden from '@material-ui/core/Hidden'
import { useSelector } from 'react-redux'
import { DesktopFooter } from './desktop-footer'
import { DesktopNav } from './desktop-nav'
import { MobileNav } from './mobile-nav'

import { Content, Root, NavWrapper, FooterWrapper } from './styles'

export const LayoutWrapper = ({ children }) => {
  // eslint-disable-next-line
  const { message, isError } = useSelector((state) => state.alert)
  const content = <Content>{children}</Content>

  return (
    <Root>
      <NavWrapper>
        <Hidden smDown>
          <DesktopNav />
        </Hidden>
        <Hidden mdUp>
          <MobileNav />
        </Hidden>
      </NavWrapper>
      {content}
      <FooterWrapper>
        <DesktopFooter />
      </FooterWrapper>
    </Root>
  )
}
