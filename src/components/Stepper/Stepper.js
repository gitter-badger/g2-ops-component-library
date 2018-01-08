import React from 'react'
import { Stepper as MuiStepper, Step, StepLabel } from 'material-ui/Stepper'
import { wrapMuiContext } from '../../wrapMuiContext'

/**
 *
 * @example ../../examples/Stepper.md
 */
const Stepper = (props) => (
  <MuiStepper {...props}>
    {props.children}
  </MuiStepper>
)

export default wrapMuiContext(Stepper)
export { Step, StepLabel }
