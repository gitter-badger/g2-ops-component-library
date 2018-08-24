import * as React from 'react'
import IconButton from 'material-ui/IconButton';

import { Button } from 'components/Button'
import './FeedbackButton.pcss'

export const FeedbackButton = (props) => {
	return (
		<IconButton styleName="FeedbackButton" onClick={props.onClick}>
			<i className="material-icons md-light md-22">feedback</i>
		</IconButton>
	)
}