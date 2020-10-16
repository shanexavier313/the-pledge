import React from 'react'
import CallItem from '../call-item'
const RecipientsList = ({ recipients }) => {
	return (
		<>
			{recipients.map((recipient, index) => {
				return <CallItem recipient={recipient} key={index} />
			})}
		</>
	)
}
export default RecipientsList
