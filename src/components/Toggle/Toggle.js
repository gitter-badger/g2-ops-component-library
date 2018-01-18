import React from 'react'
import PropTypes from 'prop-types'
import MuiToggle from 'material-ui/Toggle'
import { wrapMuiContext } from '../../wrapMuiContext'

const Toggle = (props) => (
  <MuiToggle {...props} />
)

Toggle.propTypes = {
  /** Determines whether the Toggle is initially turned on. */
  defaultToggled: PropTypes.bool,
  /** Will disable the toggle if true. */
  disabled: PropTypes.bool,
  /** Overrides the inline-styles of the Toggle element. */
  elementStyle: PropTypes.object,
  /** Overrides the inline-styles of the Icon element. */
  iconStyle: PropTypes.object,
  /** Overrides the inline-styles of the input element. */
  inputStyle: PropTypes.object,
  /** Label for toggle. */
  label: PropTypes.string,
  /** Where the label will be placed next to the toggle. */
  labelPosition: PropTypes.oneOf([
    'left',
    'right'
  ]),
  /** Overrides the inline-styles of the Toggle element label. */
  labelStyle: PropTypes.object,
  /** Callback function that is fired when the toggle switch is toggled. */	
  onToggle: PropTypes.func,
  /** Override style of ripple. */
  rippleStyle: PropTypes.object,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object,
  /** Override style for thumb. */
  thumbStyle: PropTypes.object,
  /** Toggled if set to true. */
  toggled: PropTypes.bool,
  /** Override style for track. */
  trackStyle: PropTypes.object,
  /** ValueLink prop for when using controlled toggle. */
  valueLink: PropTypes.object
}

export default wrapMuiContext(Toggle)
