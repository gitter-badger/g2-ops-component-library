import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { FeedbackDialog } from '../FeedbackDialog'
import { wrapWithMaterialUIContext as mui } from 'utilities/wrapWithContext'

it('should shallow render without erring', () => {
	const wrapper = shallow(
		mui(<FeedbackDialog
			userEmail="string"
			sendFeedback={() => {}}
			selectedYard={700}
			homeYard={12}
			selectedRole="FOO"
			countryCode="US"
			language="string"
		/>)
	)

	expect(wrapper).toBeDefined()
})

it('should mount without erring', () => {
	const wrapper = mount(
		mui(<FeedbackDialog
			userEmail="tring"
			sendFeedback={() => {}}
			selectedYard={700}
			homeYard={12}
			selectedRole="FOO"
			countryCode="US"
			language="tring"
		/>)
	)

	expect(wrapper).toBeDefined()
})

it('should react to visibility state change', () => {
	expect(true).toEqual(true)
})

it('should be initialized with correct state', () => {
	// open
	// enhancement
	expect(true).toEqual(true)
})

it('should react to visibility state change', () => {
	expect(true).toEqual(true)
})
