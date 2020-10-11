import styled from 'styled-components'
import { theme } from '../../../styles/theme'

// TODO: change to use theme ui `sx` prop

export const Root = styled.div`
  position: relative;
`

export const NavWrapper = styled.nav`
  position: relative;
  padding-right: 10vh;
  padding-left: 10vh;
`

export const FooterWrapper = styled.footer`
  position: relative;
  padding-right: 10vh;
  padding-left: 10vh;
  background-color: ${theme.colors.base300};
`

export const Content = styled.main.attrs(() => ({
  id: 'maincontent',
}))`
  position: relative;
  padding-right: 10vh;
  padding-left: 10vh;
`
