import * as React from 'react'
import { shallow, mount } from 'enzyme'

import { FeedbackDialog } from '../FeedbackDialog'
import { Checkbox } from 'components/Checkbox'
import { Button } from "components/Button";
import { TextField } from "components/TextField";
import { AutoSelect } from "components/AutoSelect";
import { DialogBox } from "components/DialogBox";
import { wrapWithMaterialUIContext} from 'utilities/wrapWithContext'

const afterSendFeedback = jest.fn()

const Component = (props) => {
	return wrapWithMaterialUIContext(
		<FeedbackDialog
			afterSendFeedback={afterSendFeedback}
			userEmail="STUB"
			selectedYard={999}
			homeYard={888}
			selectedRole="STUB"
			countryCode="US"
			language="STUB"
		/>
	)
}

const diveToComponent = () => {
	return shallow(<Component />).find(FeedbackDialog).dive()
}

it('should shallow render without erring', () => {
	const wrapper = shallow(<Component />)
	expect(wrapper).toBeDefined()
})

it('should react to visibility state change', () => {
	const wrapper = diveToComponent()
	wrapper.setState({ enhancementChosen: true })
	expect(wrapper.find(Checkbox).length).toEqual(0)
	expect(wrapper.find(TextField).length).toEqual(0)
	expect(wrapper.find(Button).length).toEqual(0)
	wrapper.setState({ enhancementChosen: false })
	expect(wrapper.find(Checkbox).length).toEqual(1)
	expect(wrapper.find(TextField).length).toEqual(1)
	expect(wrapper.find(Button).length).toEqual(1)
	wrapper.setState({ enhancementChosen: true })
	expect(wrapper.find(Checkbox).length).toEqual(0)
	expect(wrapper.find(TextField).length).toEqual(0)
	expect(wrapper.find(Button).length).toEqual(0)
})
