import React from 'react'
import { TitleBanner } from 'components/title-banner'
import { StepsBanner } from '../steps-banner'
import { homeTitleBanner } from '../../content'
import { HomeContentBanners } from './content'
import logo from 'static/images/logo.svg'

export const Home = () => (
  <>
    <TitleBanner content={homeTitleBanner}>
      <img src={logo} height="100rem" alt="logo" />
      <br />
    </TitleBanner>
    <StepsBanner />
    <HomeContentBanners />
  </>
)
