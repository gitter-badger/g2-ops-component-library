import * as React from 'react'

import { FEEDBACK_ENHANCEMENT_LINK, ENHANCEMENT_LINK_STYLES } from '../consts'
import './EnhancementInfo.pcss'

export const EnhancementInfo = () => {
	return (
		<p styleName="EnhancementInfo">
			Please enter your enhancement ideas in Innovation Forum at
			<a
				href={FEEDBACK_ENHANCEMENT_LINK}
				style={ENHANCEMENT_LINK_STYLES}
				target="_blank"
			>
				{FEEDBACK_ENHANCEMENT_LINK}
			</a>
		</p>
	)
}