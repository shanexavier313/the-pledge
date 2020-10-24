import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
`

export const NavWrapper = styled.nav`
  position: relative;
  padding: 1rem 5rem;
  @media only screen and (max-width: 800px) {
    padding: 1rem;
  }
`

export const FooterWrapper = styled.footer`
  position: relative;
  padding-right: 4rem;
  padding-left: 4rem;
  @media only screen and (max-width: 500px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  background-color: #E9EDF1;
`

export const Content = styled.main.attrs(() => ({
  id: 'maincontent',
}))`
  position: relative;
`
