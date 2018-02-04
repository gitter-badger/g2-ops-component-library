// @flow

import React from 'react'
import PropTypes from 'prop-types'
import MuiToggle from 'material-ui/Toggle'
import { wrapMuiContext } from '../../wrapMuiContext'

type TogglePropTypes = {
  /** Determines whether the Toggle is initially turned on. */
  defaultToggled?: boolean,
  /** Will disable the toggle if true. */
  disabled?: boolean,
  /** Overrides the inline-styles of the Toggle element. */
  elementStyle?: { [string]: mixed },
  /** Overrides the inline-styles of the Icon element. */
  iconStyle?: { [string]: mixed },
  /** Overrides the inline-styles of the input element. */
  inputStyle?: { [string]: mixed },
  /** Label for toggle. */
  label: string,
  /** Where the label will be placed next to the toggle. */
  labelPosition?: 'left' | 'right',
  /** Overrides the inline-styles of the Toggle element label. */
  labelStyle?: { [string]: mixed },
  /** Callback function that is fired when the toggle switch is toggled. */
  onToggle?: (SyntheticMouseEvent<HTMLInputElement>, boolean) => void,
  /** Override style of ripple. */
  rippleStyle?: { [string]: mixed },
  /** Override the inline-styles of the root element. */
  style?: { [string]: mixed },
  /** Override style for thumb. */
  thumbStyle?: { [string]: mixed },
  /** Toggled if set to true. */
  toggled?: boolean,
  /** Override style for track. */
  trackStyle?: { [string]: mixed },
  /** ValueLink prop for when using controlled toggle. */
  valueLink?: Object,
}

const Toggle = (props: TogglePropTypes) => <MuiToggle {...props} />

export default wrapMuiContext(Toggle)
