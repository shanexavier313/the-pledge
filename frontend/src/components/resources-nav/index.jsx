import React from 'react'
import { Box, Container } from '@material-ui/core'
import TabButton from 'components/tab-button'

export const ResourcesNav = ({ tab, setTab }) => (
  <Container>
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexWrap="wrap"
      py={1}
      pb={3}>
      <TabButton
        active={tab === 'demographics'}
        label="Political Identities"
        onClick={() => setTab('demographics')}
      />
      <TabButton
        active={tab === 'common-views'}
        label="Views & Response Prep"
        onClick={() => setTab('common-views')}
      />
      <TabButton
        active={tab === 'call-tactics'}
        label="Conversation Guide"
        onClick={() => setTab('call-tactics')}
      />
      <TabButton
        active={tab === 'key-issues'}
        label="Key Issues"
        onClick={() => setTab('key-issues')}
      />
      <TabButton
        active={tab === 'swing-states'}
        label="Critical States"
        onClick={() => setTab('swing-states')}
      />
    </Box>
  </Container>
)
