import React from 'react'
import renderer from 'react-test-renderer'

import Stepper, { Step, StepLabel } from '../Stepper'

describe('<Stepper />', () => {
  test('should render properly', () => {
    const stepIndex = 1
    const tree = renderer.create(
      <Stepper activeStep={stepIndex}>
        <Step>
          <StepLabel>Select campaign settings</StepLabel>
        </Step>
        <Step>
          <StepLabel>Create an ad group</StepLabel>
        </Step>
        <Step>
          <StepLabel>Create an ad</StepLabel>
        </Step>
      </Stepper>,
    )
    expect(tree).toMatchSnapshot()
  })
})
