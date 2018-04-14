// @flow

import React from 'react'
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

import wrapFabricContext from '../../wrapFabricContext'

import './style.scss'

type TextFieldPropTypes = {
  text: string,
  disabled: boolean,
  placeholder?: string,
  className?: string,
  inputClassName: string,
  otherProps?: {
    [string]: any,
  },
}

const TextField = wrapFabricContext(
  ({ placeholder, disabled, className, inputClassName, ...otherProps }: TextFieldPropTypes) => (
    <FabricTextField
      {...otherProps}
      disabled={disabled}
      inputClassName={`input ${inputClassName}`}
      className={className}
      placeholder={disabled ? '' : placeholder}
    />
  ),
)

TextField.defaultProps = {
  inputClassName: '',
}

export default TextField
