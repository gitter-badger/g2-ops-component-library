// @flow

import type { Node } from 'react'

import React from 'react'
import { Stepper as MuiStepper, Step, StepLabel } from 'material-ui/Stepper'

import { wrapMuiContext } from '../../wrapMuiContext'
import './Stepper.scss'

const Stepper = <T: { children: Node }>(props: T) => (
  <div className="stepper">
    <MuiStepper {...props}>{props.children}</MuiStepper>
  </div>
)

export default wrapMuiContext(Stepper)
export { Step, StepLabel }
