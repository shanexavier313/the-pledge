import React from 'react'
import { ContentBanner } from 'components/content-banner'
import { TitleBanner } from 'components/title-banner'
import { StepsBanner } from '../steps-banner'
import { homeTitleBanner, whoToCall, whyThisWorks } from '../../content'
import { HomeContentBanners } from './content'

export const Home = () => (
  <>
    <TitleBanner
      title={homeTitleBanner.title}
      description={homeTitleBanner.description}
      bg={homeTitleBanner.bg}
    />
    <StepsBanner />
    <HomeContentBanners />
  </>
)
