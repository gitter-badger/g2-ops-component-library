import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox as FabricCheckbox } from 'office-ui-fabric-react/lib/Checkbox'

const checkBoxPropTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func,
  styles: PropTypes.object
}

const Checkbox = ({ label, isChecked, handleChange, styles, ...otherProps }) => (
  <FabricCheckbox
    label={label}
    checked={isChecked}
    onChange={handleChange}
    styles={styles}
    {...otherProps}
  />
)

Checkbox.propTypes = checkBoxPropTypes

export default Checkbox