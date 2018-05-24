// @flow

import type { Node } from 'react'
import React from 'react'

import { Checkbox as FabricCheckbox } from 'office-ui-fabric-react/lib/Checkbox'

type CheckboxPropTypes = {
  /** label to be displayed */
  label: string,
  /** isChecked to indicate checked state */
  isChecked?: boolean,
  /** Custom render function for rendering Label */
  labelRenderer?: (any, (any) => Node) => Node,
  /** onChange event handler */
  handleChange?: (SyntheticMouseEvent<HTMLInputElement>, boolean) => void,
  /** Custom styles for Checkbox */
  styles?: { [string]: mixed },
  /** extra props */
  otherProps?: any,
}

export const Checkbox = ({
  label,
	isChecked,
	checked,
	defaultChecked,
  handleChange,
  labelRenderer,
  styles,
  ...otherProps
}: CheckboxPropTypes) => (
  <FabricCheckbox
    label={label}
    checked={isChecked || checked || defaultChecked}
    onChange={handleChange}
    styles={styles}
    onRenderLabel={labelRenderer}
    {...otherProps}
  />
)
