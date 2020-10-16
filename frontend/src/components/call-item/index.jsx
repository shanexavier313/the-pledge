import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { POLITICAL_LEANINGS, VOTER_STATUS,US_STATES } from 'domains/constants'
const ItemWrapper = styled(Grid)`
	&& {
		align-items: center;
		.right-col {
			text-align: right;
		}
	}
`
const CallItem = ({ call = {}, recipient = {} }) => {
	const {
		first_name,
		last_name,
		state_residence,
		state_registered,
		registered_to_vote,
		political_leaning,
	} = recipient
	const { notes } = call
	return (
		<Grid item xs={12}>
			<ItemWrapper container>
				<Grid item xs={8} className="left-col">
					{notes && (
						<Typography variant="h5" component="h5">
							{' '}
							{notes}
						</Typography>
					)}
					<Typography variant="subtitle1" component="subtitle1">
						{' '}
						{`${first_name} ${last_name}`}
					</Typography>
				</Grid>
				<Grid item xs={4} className="right-col">
					{notes && (
						<Button variant="contained" color="primary" size="large">
							Contacted
						</Button>
					)}
				</Grid>
			</ItemWrapper>
			<Divider />
			<ItemWrapper container spacing={2}>
				<Grid item xs={8} className="left-col">
					<Typography variant="subtitle1" component="subtitle1">
						{' '}
						State Residence
					</Typography>
				</Grid>
				<Grid item xs={4} className="right-col">
					<Typography variant="subtitle1" component="subtitle1">
						{US_STATES[state_residence.toUpperCase()]}
					</Typography>
				</Grid>
				<Grid item xs={8} className="left-col">
					<Typography variant="subtitle1" component="subtitle1">
						{' '}
						State Registered
					</Typography>
				</Grid>
				<Grid item xs={4} className="right-col">
					<Typography variant="subtitle1" component="subtitle1">
						{US_STATES[state_registered.toUpperCase()]}
					</Typography>
				</Grid>
				<Grid item xs={8} className="left-col">
					<Typography variant="subtitle1" component="subtitle1">
						{' '}
						Registered To Vote
					</Typography>
				</Grid>
				<Grid item xs={4} className="right-col">
					<Typography variant="subtitle1" component="subtitle1">
						{VOTER_STATUS[registered_to_vote]}
					</Typography>
				</Grid>
				<Grid item xs={8} className="left-col">
					<Typography variant="subtitle1" component="subtitle1">
						{' '}
						Political Leaning
					</Typography>
				</Grid>
				<Grid item xs={4} className="right-col">
					<Typography variant="subtitle1" component="subtitle1">
						{POLITICAL_LEANINGS[political_leaning]}
					</Typography>
				</Grid>
			</ItemWrapper>
		</Grid>
	)
}
export default CallItem
