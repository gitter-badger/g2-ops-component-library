import * as React from 'react'
import { ChoiceGroup as FabricChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup'

export const ChoiceGroup = ({ 
    selected, 
    defaultSelected, 
    options, 
    onChange, 
    label, 
    styles,
    ...otherProps 
}) => (
  <FabricChoiceGroup
    defaultSelectedKey={selected || defaultSelected}
    options={options}
    onChange={onChange}
    label={label}
    styles={styles}
    {...otherProps}
  /> 
)

