import React from 'react';
import CallItem from '../call-item'
const CallsList = ({ calls, recipients }) => {
	return (
		<>
			{calls.map((call, index) => {
				const recipient = recipients.find(item => item.id === call.recipient);
				return (
					<CallItem call={call} recipient={recipient} key={index} />
				)
			})}
		</>
	)
}
export default CallsList