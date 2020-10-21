import React from 'react'
import { SvgIcon } from '@material-ui/core'
import { ContentBanner } from 'components/content-banner'
import { TitleBanner } from 'components/title-banner'
import { StepsBanner } from '../steps-banner'
import { homeTitleBanner } from '../../content'
import { HomeContentBanners } from './content'
import logo from 'static/images/logo.svg'

export const Home = () => (
  <>
    <TitleBanner content={homeTitleBanner}>
      <img src={logo} height="100rem" />
      <br />
    </TitleBanner>
    <StepsBanner />
    <HomeContentBanners />
  </>
)
