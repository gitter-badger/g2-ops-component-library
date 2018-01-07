import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox as FabricCheckbox } from 'office-ui-fabric-react/lib/Checkbox'

const checkBoxPropTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  /** Custom render function for rendering Label */
  onRenderLabel: PropTypes.func,
  handleChange: PropTypes.func,
  styles: PropTypes.object
}

const Checkbox = ({ label, isChecked, handleChange, onRenderLabel, styles, ...otherProps }) => (
  <FabricCheckbox
    label={label}
    checked={isChecked}
    onChange={handleChange}
    styles={styles}
    onRenderLabel={onRenderLabel}
    {...otherProps}
  />
)

Checkbox.propTypes = checkBoxPropTypes

export default Checkbox