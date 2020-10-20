import React from 'react'
import { Box, Text } from 'rebass'
import { TitleBanner } from 'components/title-banner'
import { resourcesTitleBanner } from '../../content'
import { theme } from 'styles/theme'

export const Resources = () => (
  <>
    <TitleBanner
      title={resourcesTitleBanner.title}
      description={resourcesTitleBanner.description}
      bg={resourcesTitleBanner.bg}
    />
  </>
)
