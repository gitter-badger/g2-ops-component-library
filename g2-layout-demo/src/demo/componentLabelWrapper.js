import React from 'react'

const PropsT = {
  label: string,
  labelStyle: TODO,
  labelClassName: string,
  fieldClassName: string,
  fieldStyle: TODO,
  required: boolean,
}

const defaultFieldStyle = {
  width: '60%',
}

const defaultLabelStyle = {
  width: '40%',
  marginTop: '10px',
  color: '#1d5ab9',
  fontSize: '13px',
}

const ComponentWithLabel = (props: PropsT) => {
  const {
    Component,
    label,
    labelStyle,
    labelClassName,
    fieldClassName,
    fieldStyle,
    required,
    renderEntityAction,
    ...otherProps
  } = props
  const labelText = required ? `${label}*:` : `${label}:`
  return (
    <div style={{ display: 'flex', margin: '5px' }}>
      <span style={{ ...defaultLabelStyle, ...labelStyle }}>{labelText}</span>
      <span style={{ ...defaultFieldStyle, ...fieldStyle }}>
        <Component {...otherProps} />
      </span>
      {renderEntityAction()}
    </div>
  )
}

ComponentWithLabel.defaultProps = {
  renderEntityAction: () => {},
}

export default ComponentWithLabel
