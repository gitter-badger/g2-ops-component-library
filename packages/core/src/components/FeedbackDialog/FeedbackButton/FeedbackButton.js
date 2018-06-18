import * as React from 'react'

import { Button } from 'components/Button'
import './FeedbackButton.pcss'

export const FeedbackButton = (props) => {
	return (
		<Button
			styleName="FeedbackButton"
			variant="secondary"
			label='Feedback'
      onClick={props.onClick}
		/>
	)
}