import React from 'react'
import { Stepper, Step, StepLabel } from 'components/Stepper/Stepper'
import {Button} from 'components/Button/Button'
import { wrapMuiContext } from 'utilities/wrapMuiContext'

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class StepperExample extends React.Component {
  state = {
    finished: false,
    stepIndex: 0,
  }

  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...'
      case 1:
        return 'What is an ad group anyways?'
      case 2:
        return 'This is the bit I really care about!'
      default:
        return "You're a long way from home sonny jim!"
    }
  }

  handlePrev = () => {
    const { stepIndex } = this.state
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 })
    }
  }

  handleNext = () => {
    const { stepIndex } = this.state
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    })
  }

  render() {
    const { finished, stepIndex } = this.state
    const contentStyle = { margin: '0 16px' }

    return (
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto', fontFamily: 'Roboto, sans-serif' }}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Campaign Settings</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create Group</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create Ad</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                onClick={(event) => {
                  event.preventDefault()
                  this.setState({ stepIndex: 0, finished: false })
                }}
              >
                Click here
              </a>{' '}
              to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{ marginTop: 12 }}>
                <Button
                  type="secondary"
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{ marginRight: 12 }}
                />
                <Button type="primary" label={stepIndex === 2 ? 'Finish' : 'Next'} onClick={this.handleNext} />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default wrapMuiContext(StepperExample)
