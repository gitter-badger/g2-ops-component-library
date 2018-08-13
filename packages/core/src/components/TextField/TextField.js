// @flow

import React from 'react'
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

import {wrapFabricContext} from 'utilities/wrapFabricContext'

import './style.scss'

type TextFieldPropsT = {
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
  ({ placeholder, disabled, className, inputClassName, ...otherProps }: TextFieldPropsT) => (
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
