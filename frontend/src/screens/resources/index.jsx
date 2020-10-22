import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from 'theme-ui'
import { Grid } from '@material-ui/core'
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
import { theme } from 'styles/theme'

const ResourcesWrapper = styled(Grid)`
  && {
    max-width: 616px;
  }
`

export const Resources = ({ children }) => {
  const [tab, setTab] = useState('demographics')

  return (
    <>
      <TitleBanner content={resourcesTitleBanner} />
      <ResourcesNav tab={tab} setTab={setTab} />
      <Flex
        px={(2, 4, 6)}
        variant="content.normal"
        sx={{ flexDirection: 'column' }}>
        {tab === 'demographics' && <PoliticalIdentitiesResource />}
        {tab === 'common-views' && <CommonViewsResource />}
        {tab === 'call-tactics' && <ConversationGuideResource />}
        {tab === 'key-issues' && <KeyIssuesResource />}
        {tab === 'swing-states' && <SwingStatesResource />}
      </Flex>
    </>
  )
}
