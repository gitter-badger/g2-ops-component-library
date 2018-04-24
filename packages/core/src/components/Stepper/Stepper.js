// @flow

import type { Node } from 'react'

import React from 'react'
import { Stepper as MuiStepper, Step, StepLabel } from 'material-ui/Stepper'

import { wrapMuiContext } from 'utilities/wrapMuiContext'
import './Stepper.scss'

export const Stepper = wrapMuiContext(<T: { children: Node }>(props: T) => {
  return (
    <div className="g2-ops-stepper">
      <MuiStepper {...props}>{props.children}</MuiStepper>
    </div>
  )
})

export { Step, StepLabel }
