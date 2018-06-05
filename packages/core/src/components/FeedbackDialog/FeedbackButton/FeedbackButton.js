import * as React from 'react'

import { Button } from 'components/Button'
import './FeedbackButton.pcss'

export const FeedbackButton = (props) => {
	return (
		<Button
			// type current has no effect
			styleName="FeedbackButton"
			type="secondary"
			label='Feedback'
			onClick={props.onClick}
		/>
	)
}