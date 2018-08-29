// @flow

import React from 'react'
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

import {wrapFabricContext} from 'utilities/wrapFabricContext'

import './TextField.scss'

type TextFieldPropTypes = {
	text: string,
	label: string,
  disabled: boolean,
  placeholder?: string,
  className?: string,
  inputClassName: string,
  otherProps?: {
    [string]: any,
  },
}

export const TextField = wrapFabricContext(
  ({ placeholder, disabled, className, inputClassName, horizontal, ...otherProps }: TextFieldPropTypes) => (
    <FabricTextField
      {...otherProps}
      disabled={disabled}
      inputClassName={`input ${inputClassName}`}
      className={`${className} ${horizontal ? 'leftLabel' : ''}`}
      placeholder={disabled ? '' : placeholder}
    />
  ),
)

TextField.defaultProps = {
  inputClassName: '',
}
