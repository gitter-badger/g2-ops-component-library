import React from 'react'
import { Stepper as MuiStepper, Step, StepLabel } from 'material-ui/Stepper'
import { wrapMuiContext } from '../../wrapMuiContext'

/**
 *
 * @example ../../examples/Stepper.md
 */
const StepperComponent = (props) => wrapMuiContext(
  <MuiStepper {...props}>
    {props.children}
  </MuiStepper>
)


export const Stepper = wrapMuiContext(StepperComponent)
export { Step, StepLabel }
