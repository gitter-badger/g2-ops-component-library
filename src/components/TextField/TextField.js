import React from 'react'
import PropTypes from 'prop-types'
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { wrapFabricContext } from '../../wrapFabricContext'
import './style.scss'

const propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string
}

const TextField = ({ placeholder, disabled, className, inputClassName, ...otherProps }) => (
  <FabricTextField
    {...otherProps}
    disabled={disabled}
    inputClassName={`input ${inputClassName}`}
    className={className}
    placeholder={disabled ? '' : placeholder}
  />
)

export default wrapFabricContext(TextField)
