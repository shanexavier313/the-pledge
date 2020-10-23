import React from 'react'
import { TitleBanner } from 'components/title-banner'
import { StepsBanner } from '../steps-banner'
import { homeTitleBanner } from '../../content'
import { HomeContentBanners } from './content'
import { S3_BUCKET } from 'domains/constants'
const logo = `${S3_BUCKET}/images/logo.svg`

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
