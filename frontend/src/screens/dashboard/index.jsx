import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Text, Flex } from 'rebass'
import { navigate } from '@reach/router'
import Grid from '@material-ui/core/Grid'
import { dashboardTitleBanner } from 'content'
import {
	loadCallsAction,
	loadRecipientsAction,
	updateCallNotesAction,
} from 'redux/actions/dashboardActions'
import { TitleBanner } from 'components/title-banner'
import TabButton from 'components/tab-button'
import CallsList from 'components/calls-list'
import RecipientsList from 'components/recipients-list'

const DashboardWrapper = styled(Grid)`
	&& {
		max-width: 616px;
	}
`

export const Dashboard = () => {
	const [tab, setTab] = useState('calls')
	const dispatch = useDispatch()
	const { calls, recipients } = useSelector((state) => state.dashboard)
	useEffect(() => {
		if (tab === 'calls') {
			loadCallsAction(dispatch)
			loadRecipientsAction(dispatch)
		} else {
			loadRecipientsAction(dispatch)
		}
	}, [tab])
	console.log(calls, recipients)

	const updateCallNotesActionCallback = (call, notes) => {
		updateCallNotesAction(call, notes)
		navigate('dashboard')
	}
	return (
		<Box>
			<TitleBanner
				title={dashboardTitleBanner.title}
				description={dashboardTitleBanner.description}
				bg={dashboardTitleBanner.bg}
			/>
			<Flex
				alignItems="center"
				justifyContent="center"
				px={3}
				py={4}
				bg="muted">
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
			</Flex>
			<Flex
				alignItems="center"
				justifyContent="center"
				px={3}
				py={4}
				bg="muted">
				{tab === 'calls' && (
					<DashboardWrapper container spacing={4}>
						<CallsList
							calls={calls}
							recipients={recipients}
							updateCallNotesAction={updateCallNotesActionCallback}
						/>
					</DashboardWrapper>
				)}
				{tab === 'recipients' && (
					<DashboardWrapper container spacing={4}>
						<RecipientsList recipients={recipients} />
					</DashboardWrapper>
				)}
			</Flex>
		</Box>
	)
}
