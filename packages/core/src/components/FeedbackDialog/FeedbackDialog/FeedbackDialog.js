import * as React from "react";
import { Link } from "react-router-dom";

import { Button } from "components/Button";
import { TextField } from "components/TextField";
import { Checkbox } from "components/Checkbox";
import { AutoSelect } from "components/AutoSelect";
import { DialogBox } from "components/DialogBox";
import { FAQLink } from "../FAQLink";
import { FeedbackButton } from "../FeedbackButton";
import { EnhancementInfo } from "../EnhancementInfo";
import { toObject, generateFeedbackEmail, createSubjectText } from "../utilities";
import { FAQText } from '../FAQText'
import './FeedbackDialog.pcss'

import {
	FEEDBACK_ENHANCEMENT_LINK,
	ENHANCEMENT_LINK_STYLES,
	EMAIL_CHECKBOX_STYLES,
	SUBJECT_HEADER,
	OPTION_STYLES,
	PADDING_5PX_0
} from '../consts';

type PropsT = {
  userEmail: string,
  afterSendFeedback(): any,
  selectedYard: string | number,
  homeYard: string | number,
  selectedRole: string,
  countryCode: string,
  language: string,
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
};

// TODO: Move to consts somewhere.
const processOptions = [
  { key: 'abc', value: 'ABC (AUCTION BOARD CONTROL)' },
  { key: 'cfr', value: 'CALL FOR RELEASE' },
  { key: 'casbo', value: 'CAS BACK OFFICE SUPPORT' },
  { key: 'vwt', value: 'COMPLIANCE MANAGEMENT' },
  { key: 'dispatch', value: 'DISPATCH' },
  { key: 'dtle', value: 'DTLE' },
  { key: 'employee', value: 'EMPLOYEE' },
  { key: 'lotReview', value: 'LOT MAINTENANCE' },
  { key: 'lotSearch', value: 'LOT SEARCH' },
  { key: 'member', value: 'MEMBER' },
  { key: 'mbp', value: 'MEMBER PAYMENTS' },
  { key: 'miHub', value: 'MIHUB' },
  { key: 'pricing', value: 'PRICING' },
  { key: 'proQuote', value: 'PRO QUOTE' },
  { key: 'titlePortal', value: 'TITLE PORTAL' },
  { key: 'vendor', value: 'VENDOR' },
]

const issueTypeOptions = [
  { key: 'ACCESS', value: 'Access/Permissions' },
  { key: 'BUG', value: 'Bug/Problem' },
  { key: 'CAS GAP', value: 'CAS Gap/Missing Functionality' },
  { key: 'COMMENT', value: 'Comment' },
  { key: 'ENHANCEMENT', value: 'Enhancement/Improvements' },
  { key: 'QUESTION', value: 'Question' },
  { key: 'OTHER', value: 'Other' },
]

export class FeedbackDialog extends React.PureComponent<PropsT> {
  state = { ...initialState }

  setFeedbackValue = event => {
		event.persist();

    this.setState(state => ({
      feedbackValue: event.target.value
    }));
  };

  handleOpen = () => {
    this.setState(state => ({ open: true }));
  };

  handleClose = () => {
    this.setState(state => (initialState));
  };

  toggleIncludeEmail = event => {
    this.setState(state => ({
      includeEmail: !state.includeEmail
    }));
	};
	
	sendFeedback = async (feedback) => {
		// TODO: Handle this request here.
		// const response = await xhr.post('/feedback', feedback, {
    //   headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    //   responseType: 'json',
		// })

		this.props.afterSendFeedback(feedback)
	}

  onSubmit = event => {
		event.preventDefault();
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
		});

    this.handleClose();
	};
	
	setSelected = (which) => value => {
		return this.setState(state => ({ [`selected${which}`]: value }))
	}

	getDisplayOption = (whichFeedbackValues) => which => {
    const options = whichFeedbackValues[0] === 'i'
      ? issueTypeOptions
      : processOptions

		return options.find(x => which.key === x.key).value;
	}

	setSelectedIssueType = option => {
		this.state.enhancementChosen = option.key === "ENHANCEMENT" ? true : false;
		this.setSelected('issueType')(option.value)
	}

  render() {
		const { props, state } = this

    return (
      <div data-ccc="AppBarFeedback">
        <FeedbackButton onTouchTap={this.handleOpen} />
				<DialogBox
					showHeader
					showCloseButton
					title="Please provide us your feedback."
					hideDialog={!state.open}
					onDismiss={this.handleClose}
					autoScrollBodyContent
					containerClassName='copart_cc_FeedbackDialog_actionsContainer'
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
									rows={4}
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
									style={EMAIL_CHECKBOX_STYLES}
									defaultChecked
								/>
							</If>
							<If condition={!state.enhancementChosen}>
								<Button
									styleName="submitButton"
									label="Submit"
									type="submit"
									primary
								/>
							</If>
						</div>
						<If condition={state.enhancementChosen}>
							<EnhancementInfo />
						</If>
					</form>
				</DialogBox>
      </div>
    );
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
				disabled
				fullWidth
				value={self.props.userEmail}
			/>
		</div>
	)
}

const AutoSelects = ({ self }) => {
	return (
		<div styleName="autoSelectsBox">
			<AutoSelect
				styleName="autoSelect"
				name="IssueType"
				options={issueTypeOptions}
				width={200}
				label="Issue Type*"
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
					label="Process*"
					placeholder="Process"
					options={processOptions}
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