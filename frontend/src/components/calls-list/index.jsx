import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { navigate } from '@reach/router'
import CallItem from '../call-item'
const CallsList = ({ calls, recipients, updateCallNotesAction }) => {
	return (
		<>
			{calls.map((call, index) => {
				const recipient = recipients.find((item) => item.id === call.recipient)
				return <CallItem call={call} recipient={recipient} key={index} updateCallNotesAction={updateCallNotesAction} />
			})}
			<Grid item xs={12}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => navigate('create-call')}
					fullWidth>
					Add Call +
				</Button>
			</Grid>
		</>
	)
}
export default CallsList
