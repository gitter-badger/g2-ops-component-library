import * as React from "react"

import { Button } from "components/Button"
import { TextField } from "components/TextField"
import { Checkbox } from "components/Checkbox"
import { AutoSelect } from "components/AutoSelect"
import { DialogBox } from "components/DialogBox"

import { FAQLink } from "../FAQLink"
import { FeedbackButton } from "../FeedbackButton"
import { EnhancementInfo } from "../EnhancementInfo"
import { toObject, generateFeedbackEmail, createSubjectText } from "../utilities"
import {
	FEEDBACK_ENHANCEMENT_LINK,
	ENHANCEMENT_LINK_STYLES,
	EMAIL_CHECKBOX_STYLES,
	SUBJECT_HEADER,
	OPTION_STYLES,
	PADDING_5PX_0,
	PROCESS_OPTIONS,
	ISSUE_TYPE_OPTIONS
} from '../consts'
import { FAQText } from '../FAQText'

import './FeedbackDialog.pcss'

const formatAutoSelectOption = (option) => {
  return option.replace(/\w\S*/g, (text) => {
      return text[0].toUpperCase() + text.substr(1).toLowerCase();
  });
}

const DialogTitle = (props) => {
  return (
    <span styleName="dialogTitle"><i className="material-icons">feedback</i>Please provide us your feedback.</span>
  )
}

type PropsT = {
  userEmail?: string,
  afterSendFeedback(): any,
  selectedYard?: string | number,
  homeYard?: string | number,
  selectedRole?: string,
  countryCode?: string,
  language?: string,
  feedbackIssueTypeValues: [],
  feedbackProcessValues: []
}

const initialState = {
	open: false,
	enhancementChosen: false,
	includeEmail: true,
	feedbackValue: "",
	selectedissueType: "",
	selectedprocess: ""
}

export class FeedbackDialog extends React.PureComponent<PropsT> {
  state = { ...initialState }

  onSubmit = event => {
		event.preventDefault()
		const { props, state } = this

		this.sendFeedback({
			subject: event.target |> toObject |> createSubjectText,
			bodyContent: generateFeedbackEmail({
				email: state.includeEmail ? props.userEmail : "",
				feedback: state.feedbackValue,
				selectedYard: props.selectedYard,
				homeYard: props.homeYard,
				selectedRole: props.selectedRole,
				countryCode: props.countryCode,
				language: props.language
			})
		})

    this.handleClose()
	}
	
	setSelected = (which) => value => {
		return this.setState(state => ({ [`selected${which}`]: value }))
	}

	getDisplayOption = (whichFeedbackValues) => which => {
    const options = whichFeedbackValues[0] === 'i'
      ? ISSUE_TYPE_OPTIONS
      : PROCESS_OPTIONS

		return options.find(x => which.key === x.key).value
	}

	setSelectedIssueType = option => {
		this.setState({ enhancementChosen: option.key === "ENHANCEMENT"  })
		this.setSelected('issueType')(option.value)
	}

  setFeedbackValue = event => {
		event.persist()

    this.setState(state => ({
      feedbackValue: event.target.value
    }))
	}

  handleOpen = () => {
    this.setState(state => ({ open: true }))
  }

  handleClose = () => {
    this.setState(state => (initialState))
	}
	
	sendFeedback = async (feedback) => {
		this.props.afterSendFeedback(feedback)
	}

  toggleIncludeEmail = event => {
    this.setState(state => ({
      includeEmail: !state.includeEmail
    }))
	}

  render() {
    const { props, state } = this
    return (
      <div data-core-component="FeedbackDialog">
        <FeedbackButton onClick={this.handleOpen} data-core-component="FeedbackDialog-Button" />
				<DialogBox
          styleName="FeedbackDialog"
					showHeader
					showCloseButton
					title={<DialogTitle />}
					hideDialog={!state.open}
					onDismiss={this.handleClose}
					autoScrollBodyContent
          containerClassName='copart_core-components_FeedbackDialog_Container'
				>
					<FAQText />
					<form onSubmit={this.onSubmit}>
						<EmailInput self={this} />
						<AutoSelects self={this} />
						<If condition={!state.enhancementChosen}>
							<div styleName="feedbackBox" style={PADDING_5PX_0}>
								<TextField
									placeholder="Please write your feedback."
									hintText={"Feedback with Lot Number"}
									floatingLabelText={`Feedback*`}
									onChange={this.setFeedbackValue}
									text={state.feedbackValue}
									floatingLabelFixed
									multiline
									required
									rows={10}
									fullWidth
								/>
							</div>
						</If>
						<div styleName="bottomBox">
							<If condition={!state.enhancementChosen}>
								<Checkbox
									label="Include Email"
									labelPosition="right"
                  handleChange={this.toggleIncludeEmail}
                  defaultChecked={state.includeEmail}
									style={EMAIL_CHECKBOX_STYLES}
								/>
							</If>
							<If condition={!state.enhancementChosen}>
								<Button
									styleName="submitButton"
									label="Submit"
									type="submit"
									variant="primary"
								/>
							</If>
						</div>
						<If condition={state.enhancementChosen}>
							<EnhancementInfo />
						</If>
					</form>
				</DialogBox>
      </div>
    )
  }
}

const EmailInput = ({ self }) => {
	return (
		<div styleName="emailInputBox">
			<TextField
				label="Email"
				styleName="emailTextField"
				floatingLabelText="Email"
				floatingLabelFixed
				type="email"
				disabled={!!self.props.userEmail}
				fullWidth
				value={self.props.userEmail}
			/>
		</div>
	)
}

// NOTE: Should AutoSelect fuzzy-filter as the user types?
const AutoSelects = ({ self }) => {
	return (
		<div styleName="autoSelectsBox">
			<AutoSelect
				styleName="autoSelect"
				name="IssueType"
				options={ISSUE_TYPE_OPTIONS}
				width={200}
				label="Issue Type"
				selectedOption="2"
				required
        placeholder="Issue Type"
				value={self.state.selectedissueType}
				onChange={self.setSelectedIssueType}
				optionStyleProps={OPTION_STYLES}
				displayOption={self.getDisplayOption('i')}
			/>
			<If condition={!self.state.enhancementChosen}>
				<AutoSelect
					styleName="autoSelect"
					width={200}
					name="Process"
					label="Process"
					placeholder="Process"
					options={PROCESS_OPTIONS}
					selectedOption="2"
          required
					value={self.state.selectedprocess}
					onChange={self.setSelected('process')}
					optionStyleProps={OPTION_STYLES}
					displayOption={self.getDisplayOption('p')}
				/>
			</If>
		</div>
	)
}

FeedbackDialog.defaultProps = {
	userEmail: '',
	selectedYard: '',
	homeYard: '',
	selectedRole: '',
	countryCode: '',
	language: '',
	feedbackIssueTypeValues: [],
	feedbackProcessValues: []
}