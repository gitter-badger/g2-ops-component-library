// @flow

import type { Node } from 'react'

import React from 'react'
import { Stepper as MuiStepper, Step, StepLabel } from 'material-ui/Stepper'

import { wrapMuiContext } from '../../wrapMuiContext'

const Stepper =  wrapMuiContext(MuiStepper)
export { Stepper, Step, StepLabel }
