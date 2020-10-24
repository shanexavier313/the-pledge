import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Box } from '@material-ui/core'
import { dashboardTitleBanner } from 'content'
import {
  loadCallsAction,
  loadRecipientsAction,
  updateCallAction,
} from 'redux/actions/dashboardActions'
import { TitleBanner } from 'components/title-banner'
import TabButton from 'components/tab-button'
import CallsList from 'components/calls-list'
import RecipientsList from 'components/recipients-list'
import { LayoutWrapper } from 'app/wrappers/layout'

const DashboardWrapper = styled(Grid)`
  && {
    max-width: 616px;
  }
`

export const Dashboard = () => {
  const [tab, setTab] = useState('calls')
  const dispatch = useDispatch()
  const { calls, recipients, loading } = useSelector((state) => state.dashboard)
  useEffect(() => {
    if (tab === 'calls') {
      loadCallsAction(dispatch)
      loadRecipientsAction(dispatch)
    } else {
      loadRecipientsAction(dispatch)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const updateCallActionCallback = (call, updatedData) => {
    updateCallAction(dispatch, call, updatedData, calls)
    // loadCallsAction(dispatch)
    // navigate('dashboard')
  }
  return (
    <LayoutWrapper>
      <TitleBanner content={dashboardTitleBanner} />
      <Grid container alignItems="center" justify="center" fullWidth>
        <Box p={1}>
          <TabButton
            active={tab === 'calls'}
            label="Calls"
            onClick={() => setTab('calls')}
          />
        </Box>
        <Box p={1}>
          <TabButton
            active={tab === 'recipients'}
            label="Recipients"
            onClick={() => setTab('recipients')}
          />
        </Box>
      </Grid>
      <Grid container alignItems="center" justify="center" fullWidth>
        <Box px={2} py={2}>
          {tab === 'calls' && (
            <DashboardWrapper container spacing={4}>
              <CallsList
                calls={calls}
                recipients={recipients}
                updateCallAction={updateCallActionCallback}
                loading={loading}
              />
            </DashboardWrapper>
          )}
          {tab === 'recipients' && (
            <DashboardWrapper container spacing={4}>
              <RecipientsList recipients={recipients} />
            </DashboardWrapper>
          )}
        </Box>
      </Grid>
    </LayoutWrapper>
  )
}
