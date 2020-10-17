import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
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
const CallItemWrapper = styled(Grid)`
	&& {
		border: 1px solid #e7e7e7;
		border-radius: 5px;
		margin-bottom: 1rem;
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
	const { notes, completed, date } = call
	return (
		<CallItemWrapper item xs={12}>
			<ItemWrapper container>
				<Grid item xs={8} className="left-col">
					{date && (
						<Typography variant="h5" component="h5">
							{' '}
							{date}
						</Typography>
					)}
					<Typography variant="subtitle1" component="subtitle1">
						{' '}
						{`${first_name} ${last_name}`}
					</Typography>
				</Grid>
				<Grid item xs={4} className="right-col">
					{notes && (
						<FormControlLabel
			        control={
			          <Checkbox
			            checked={completed}
			            name="checkedB"
			            color="primary"
			          />
			        }
			        label="Contacted"
			      />
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
		</CallItemWrapper>
	)
}
export default CallItem
