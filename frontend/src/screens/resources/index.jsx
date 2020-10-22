import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { TitleBanner } from 'components/title-banner'
import { ResourcesNav } from 'components/resources-nav'
import {
  ConversationGuideResource,
  CommonViewsResource,
  PoliticalIdentitiesResource,
  KeyIssuesResource,
  SwingStatesResource,
} from 'components/resources'
import { resourcesTitleBanner } from '../../content'

export const Resources = ({ children }) => {
  const [tab, setTab] = useState('demographics')

  return (
    <>
      <TitleBanner content={resourcesTitleBanner} />
      <ResourcesNav tab={tab} setTab={setTab} />
      <Box px={6}>
        {tab === 'demographics' && <PoliticalIdentitiesResource />}
        {tab === 'common-views' && <CommonViewsResource />}
        {tab === 'call-tactics' && <ConversationGuideResource />}
        {tab === 'key-issues' && <KeyIssuesResource />}
        {tab === 'swing-states' && <SwingStatesResource />}
      </Box>
    </>
  )
}
