import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import TabButton from 'components/tab-button'
import { theme } from 'styles/theme'

export const ResourcesNav = ({ tab, setTab }) => (
  <Box
    display="flex"
    justifyContent="space-around"
    alignItems="center"
    py={4}
    px={8}>
    <Box p={1}>
      <TabButton
        active={tab === 'demographics'}
        label="Demographics"
        onClick={() => setTab('demographics')}
      />
      <TabButton
        active={tab === 'common-views'}
        label="Common Views"
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
        label="Swing States"
        onClick={() => setTab('swing-states')}
      />
    </Box>
  </Box>
)
