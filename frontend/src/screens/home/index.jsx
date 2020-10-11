import React from 'react'
import { TitleBanner } from '../../components/title-banner'
import { theme } from '../../styles/theme'

export const Home = () => {
  const bannerContent = {
    title: 'The Pledge',
    description:
      'The 2020 election is rapidly approaching and it’s time to motivate our extended networks to vote for Joe Biden. These conversations are often challenging -- our step by step process helps you meet people where they are. Take the pledge and make a difference in this election.',
    bg: theme.colors.white,
  }
  return (
    <TitleBanner
      title={bannerContent.title}
      description={bannerContent.description}
      bg={bannerContent.bg}
    />
  )
}
