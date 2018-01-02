import React from 'react'
import { Stepper as MuiStepper, Step, StepLabel } from 'material-ui/Stepper'

/**
 *
 * @example ../../examples/Stepper.md
 */
export class Stepper extends React.Component {
  render() {
    return (
      <MuiStepper {...this.props}>
        {this.props.children}
      </MuiStepper>
    )
  }
}

export { Step, StepLabel }
