import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
`

export const NavWrapper = styled.nav`
  position: relative;
  padding-right: 240px;
  padding-left: 240px;
`

export const FooterWrapper = styled.footer`
  position: relative;
  padding-right: 240px;
  padding-left: 240px;
  background-color: grey;
`

export const Content = styled.main.attrs(() => ({
  id: 'maincontent',
}))`
  position: relative;
  padding-right: 240px;
  padding-left: 240px;
`
