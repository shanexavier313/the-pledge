import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

const StyledLink = styled(RouterLink)`
  box-sizing: border-box;
  min-width: 0px;
  font-family: Inter, system-ui, sans-serif;
  line-height: 1.5;
  text-decoration: none;
  color &.footer-link {
    margin: 0px;
    color: rgb(52, 58, 64);
    font-size: 14px;
    font-weight: 600;
  }
  &.nav-link {
    padding-left: 8px;
    padding-right: 8px;
    color: rgb(134, 142, 150);
    font-size: 16px;
    margin: 8px 4px;
    font-weight: 600;
    &:hover {
      color: #f0682f;
    }
  }
`
export const Link = (props) => <StyledLink {...props} />
