import React from 'react'
import PropTypes from 'prop-types'
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { wrapFabricContext } from '../../wrapFabricContext'

const propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string
}

const TextField = ({ placeholder, disabled, ...otherProps }) => (
  <FabricTextField
    {...otherProps}
    disabled={disabled}
    placeholder={disabled ? '' : placeholder}
  />
)

export default wrapFabricContext(TextField)
